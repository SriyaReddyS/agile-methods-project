/* ==================================
   Wildlife Guardian
   Local web server + chatbot API
   ----------------------------------
   Serves the static site from the repo root
   and handles POST /api/chat. The AI API key
   (OpenAI or Anthropic) stays on the server
   (environment variable) and is never sent
   to browsers.

   Run:  npm start          (live, needs OPENAI_API_KEY or ANTHROPIC_API_KEY)
         npm run start:mock (demo answers, no key)
================================== */

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const { loadAnimals } = require("./animals");
const chat = require("./chat");

const SITE_ROOT = path.join(__dirname, "..");
const MAX_BODY_BYTES = 32 * 1024;
const RATE_LIMIT = { windowMs: 60 * 1000, maxRequests: 20 };

const CONTENT_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".webp": "image/webp"
};

// Never serve server code, tests, dependencies, or config.
const BLOCKED_TOP_LEVEL = new Set(["server", "tests", "node_modules", "package.json", "package-lock.json"]);

/* ==================================
   Helpers
================================== */

function sendJson(res, status, payload) {
    const body = JSON.stringify(payload);
    res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(body),
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
    });
    res.end(body);
}

function sendError(res, status, code, message) {
    sendJson(res, status, { error: code, message: message });
}

function readJsonBody(req) {
    return new Promise(function (resolve, reject) {
        let size = 0;
        let chunks = [];

        req.on("data", function (chunk) {
            size += chunk.length;

            if (size > MAX_BODY_BYTES * 4) {
                // Far too large: stop reading entirely.
                req.destroy();
                return;
            }

            if (size > MAX_BODY_BYTES) {
                chunks = null;
                return;
            }

            chunks.push(chunk);
        });

        req.on("end", function () {
            if (!chunks) {
                reject(new chat.ChatError("too_large", 413, "That message is too long."));
                return;
            }

            try {
                resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "null"));
            } catch (error) {
                reject(new chat.ChatError("invalid_request", 400, "Request body must be valid JSON."));
            }
        });

        req.on("error", reject);
    });
}

function createRateLimiter(options) {
    const hits = new Map();

    return function isAllowed(key) {
        const now = Date.now();
        const recent = (hits.get(key) || []).filter(function (time) {
            return now - time < options.windowMs;
        });

        if (recent.length >= options.maxRequests) {
            hits.set(key, recent);
            return false;
        }

        recent.push(now);
        hits.set(key, recent);
        return true;
    };
}

// Resolve a URL path to a safe file inside SITE_ROOT, or null.
function resolveStaticPath(urlPath) {
    let decoded;

    try {
        decoded = decodeURIComponent(urlPath);
    } catch (error) {
        return null;
    }

    if (decoded.includes("\0")) {
        return null;
    }

    const relative = decoded === "/" ? "index.html" : decoded.replace(/^\/+/, "");
    const segments = relative.split("/");

    if (segments.some(function (segment) { return segment.startsWith(".") || segment === ""; })) {
        return null;
    }

    if (BLOCKED_TOP_LEVEL.has(segments[0])) {
        return null;
    }

    const filePath = path.resolve(SITE_ROOT, relative);

    if (!filePath.startsWith(SITE_ROOT + path.sep)) {
        return null;
    }

    if (!CONTENT_TYPES[path.extname(filePath).toLowerCase()]) {
        return null;
    }

    return filePath;
}

function serveStatic(req, res, urlPath) {
    if (req.method !== "GET" && req.method !== "HEAD") {
        sendError(res, 405, "method_not_allowed", "Method not allowed.");
        return;
    }

    const filePath = resolveStaticPath(urlPath);

    if (!filePath) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
    }

    fs.stat(filePath, function (error, stats) {
        if (error || !stats.isFile()) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Not found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": CONTENT_TYPES[path.extname(filePath).toLowerCase()],
            "Content-Length": stats.size,
            "X-Content-Type-Options": "nosniff"
        });

        if (req.method === "HEAD") {
            res.end();
            return;
        }

        fs.createReadStream(filePath).pipe(res);
    });
}

/* ==================================
   Server
================================== */

// deps: { animals, responder, sdk, rateLimit }
function createServer(deps) {
    const isAllowed = createRateLimiter(deps.rateLimit || RATE_LIMIT);

    return http.createServer(async function (req, res) {
        const url = new URL(req.url, "http://localhost");

        if (url.pathname === "/api/chat") {
            if (req.method !== "POST") {
                res.setHeader("Allow", "POST");
                sendError(res, 405, "method_not_allowed", "Use POST for chat requests.");
                return;
            }

            if (!String(req.headers["content-type"] || "").includes("application/json")) {
                sendError(res, 415, "invalid_request", "Send chat requests as JSON.");
                return;
            }

            if (!isAllowed(req.socket.remoteAddress || "unknown")) {
                sendError(res, 429, "rate_limited", "Too many questions in a short time. Please wait a minute and try again.");
                return;
            }

            try {
                const body = await readJsonBody(req);
                const result = await chat.handleChat(body, deps);
                sendJson(res, 200, result);
            } catch (error) {
                const chatError = chat.toChatError(error, deps.sdk || deps.Anthropic);
                if (chatError.status >= 500) {
                    // Log the class/status only; never log request headers or keys.
                    console.error("[chat]", chatError.code, error && error.name, error && error.status, error && error.code);
                }
                sendError(res, chatError.status, chatError.code, chatError.message);
            }
            return;
        }

        serveStatic(req, res, url.pathname);
    });
}

// Treat empty values and .env.example placeholders ("your-...") as unset.
function readKey(value) {
    const key = String(value || "").trim();
    return key && !/^your-/i.test(key) ? key : null;
}

// Pick the provider: CHATBOT_PROVIDER if set, otherwise whichever key exists
// (OpenAI first).
function chooseProvider(env) {
    const keys = {
        // OPEN_AI_API_KEY is accepted as an alias of the standard name.
        openai: readKey(env.OPENAI_API_KEY) || readKey(env.OPEN_AI_API_KEY),
        anthropic: readKey(env.ANTHROPIC_API_KEY)
    };
    const requested = String(env.CHATBOT_PROVIDER || "").toLowerCase();

    if (requested === "openai" || requested === "anthropic") {
        return { provider: requested, key: keys[requested] };
    }

    if (keys.openai) {
        return { provider: "openai", key: keys.openai };
    }

    return { provider: "anthropic", key: keys.anthropic };
}

function loadSdk(provider) {
    const sdk = require(provider === "openai" ? "openai" : "@anthropic-ai/sdk");
    return sdk.default || sdk;
}

// Build dependencies from environment variables.
function createDepsFromEnv(env) {
    const animals = loadAnimals();
    const mode = (env.CHATBOT_MODE || "live").toLowerCase();

    if (mode === "mock") {
        return { animals: animals, responder: chat.createMockResponder(), mode: "mock" };
    }

    const choice = chooseProvider(env);
    const SDK = loadSdk(choice.provider);

    if (!choice.key) {
        return { animals: animals, responder: null, sdk: SDK, mode: "unconfigured", provider: choice.provider };
    }

    const clientOptions = { apiKey: choice.key, timeout: 20 * 1000, maxRetries: 1 };
    const responder = choice.provider === "openai"
        ? chat.createOpenAIResponder(new SDK(clientOptions), { model: env.OPENAI_MODEL || chat.DEFAULT_MODELS.openai })
        : chat.createLiveResponder(new SDK(clientOptions), { model: env.ANTHROPIC_MODEL || chat.DEFAULT_MODELS.anthropic });

    return { animals: animals, responder: responder, sdk: SDK, mode: "live", provider: choice.provider };
}

if (require.main === module) {
    const deps = createDepsFromEnv(process.env);
    const port = Number(process.env.PORT) || 8000;

    createServer(deps).listen(port, function () {
        console.log("Wildlife Guardian running at http://localhost:" + port + "/");
        console.log("Chatbot mode: " + deps.mode +
            (deps.mode === "live" ? " (" + deps.provider + ", model " + deps.responder.model + ")" : "") +
            " | species loaded: " + deps.animals.length);

        if (deps.mode === "unconfigured") {
            console.log("No AI API key set (OPENAI_API_KEY or ANTHROPIC_API_KEY): /api/chat will return a configuration error.");
            console.log("Copy .env.example to .env and add a key, or run `npm run start:mock`.");
        }
    });
}

module.exports = { createServer, createDepsFromEnv, chooseProvider, resolveStaticPath };
