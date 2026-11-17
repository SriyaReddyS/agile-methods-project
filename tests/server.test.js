// HTTP tests for /api/chat and static file serving. Run: npm test
const test = require("node:test");
const assert = require("node:assert/strict");

const sdk = require("@anthropic-ai/sdk");
const Anthropic = sdk.default || sdk;
const openaiSdk = require("openai");
const OpenAI = openaiSdk.default || openaiSdk;

const { createServer, chooseProvider } = require("../server/server");
const { loadAnimals } = require("../server/animals");
const chat = require("../server/chat");

const animals = loadAnimals();

async function startServer(deps) {
    const server = createServer(Object.assign({ animals: animals, Anthropic: Anthropic }, deps));
    await new Promise(function (resolve) { server.listen(0, "127.0.0.1", resolve); });
    const base = "http://127.0.0.1:" + server.address().port;
    return { server: server, base: base };
}

function postChat(base, body, contentType) {
    return fetch(base + "/api/chat", {
        method: "POST",
        headers: { "Content-Type": contentType || "application/json" },
        body: typeof body === "string" ? body : JSON.stringify(body)
    });
}

test("mock mode: species questions, follow-ups and validation over HTTP", async function (t) {
    const { server, base } = await startServer({ responder: chat.createMockResponder() });
    t.after(function () { server.close(); });

    // Amur leopard habitat
    let res = await postChat(base, { messages: [{ role: "user", content: "Where do Amur leopards live?" }] });
    let data = await res.json();
    assert.equal(res.status, 200);
    assert.equal(data.speciesId, "amur-leopard");
    assert.match(data.reply, /Russian Far East/);

    // Follow-up keeps species context via speciesId + history
    res = await postChat(base, {
        speciesId: data.speciesId,
        messages: [
            { role: "user", content: "Where do Amur leopards live?" },
            { role: "assistant", content: data.reply },
            { role: "user", content: "What threatens them?" }
        ]
    });
    data = await res.json();
    assert.equal(res.status, 200);
    assert.equal(data.speciesId, "amur-leopard");
    assert.match(data.reply, /canine distemper/);

    // Species missing from the dataset
    res = await postChat(base, { messages: [{ role: "user", content: "Where do koalas live?" }] });
    data = await res.json();
    assert.equal(res.status, 200);
    assert.equal(data.kind, "limitation");
    assert.match(data.reply, /don't have verified information/);
    assert.deepEqual(data.sources, []);

    // Empty message
    res = await postChat(base, { messages: [{ role: "user", content: "" }] });
    data = await res.json();
    assert.equal(res.status, 400);
    assert.equal(data.error, "empty_message");

    // Invalid JSON and wrong content type
    res = await postChat(base, "{not json");
    assert.equal(res.status, 400);
    res = await postChat(base, "hello", "text/plain");
    assert.equal(res.status, 415);

    // Oversized body
    res = await postChat(base, { messages: [{ role: "user", content: "x".repeat(40000) }] });
    assert.equal(res.status, 413);

    // Wrong method
    res = await fetch(base + "/api/chat");
    assert.equal(res.status, 405);
});

test("live mode without API key returns a safe configuration error", async function (t) {
    const { server, base } = await startServer({ responder: null });
    t.after(function () { server.close(); });

    const res = await postChat(base, { messages: [{ role: "user", content: "Where do Amur leopards live?" }] });
    const data = await res.json();
    assert.equal(res.status, 503);
    assert.equal(data.error, "not_configured");
    assert.doesNotMatch(JSON.stringify(data), /sk-ant/);
});

test("provider failures become user-friendly errors", async function (t) {
    const failures = [
        [new Anthropic.APIConnectionError({ message: "network down" }), 502, "provider_unavailable"],
        [new Anthropic.APIConnectionTimeoutError({ message: "timeout" }), 504, "provider_timeout"]
    ];

    for (const [error, status, code] of failures) {
        const failingClient = { beta: { messages: { create: async function () { throw error; } } } };
        const { server, base } = await startServer({ responder: chat.createLiveResponder(failingClient) });

        const res = await postChat(base, { messages: [{ role: "user", content: "Where do Amur leopards live?" }] });
        const data = await res.json();
        server.close();

        assert.equal(res.status, status);
        assert.equal(data.error, code);
        assert.doesNotMatch(data.message, /network down|timeout\b/);
    }
});

test("rate limit returns 429", async function (t) {
    const { server, base } = await startServer({
        responder: chat.createMockResponder(),
        rateLimit: { windowMs: 60000, maxRequests: 2 }
    });
    t.after(function () { server.close(); });

    const body = { messages: [{ role: "user", content: "Where do Amur leopards live?" }] };
    assert.equal((await postChat(base, body)).status, 200);
    assert.equal((await postChat(base, body)).status, 200);
    assert.equal((await postChat(base, body)).status, 429);
});

test("static server serves site files but not secrets or server code", async function (t) {
    const { server, base } = await startServer({ responder: chat.createMockResponder() });
    t.after(function () { server.close(); });

    for (const okPath of ["/", "/animal.html", "/chatbot.js", "/animal-data.js", "/images/amur-leopard.jpg"]) {
        const res = await fetch(base + okPath);
        assert.equal(res.status, 200, okPath);
        await res.arrayBuffer();
    }

    for (const blocked of ["/.env", "/.env.example", "/server/chat.js", "/package.json", "/node_modules/@anthropic-ai/sdk/index.js", "/tests/chat.test.js", "/%2e%2e/etc/passwd", "/.git/config"]) {
        const res = await fetch(base + blocked);
        assert.equal(res.status, 404, blocked);
        await res.arrayBuffer();
    }
});

test("OpenAI provider failures, including an empty credit balance, become friendly errors", async function () {
    const quota = OpenAI.APIError.generate(429, { error: { code: "insufficient_quota", type: "insufficient_quota", message: "no credits" } }, "no credits", new Headers());
    const rate = OpenAI.APIError.generate(429, { error: { code: "rate_limit_exceeded", type: "requests", message: "slow down" } }, "slow down", new Headers());
    const cases = [
        [quota, 503, "provider_quota"],
        [rate, 503, "provider_busy"],
        [new OpenAI.APIConnectionError({ message: "network down" }), 502, "provider_unavailable"]
    ];

    for (const [error, status, code] of cases) {
        const failingClient = { chat: { completions: { create: async function () { throw error; } } } };
        const { server, base } = await startServer({ sdk: OpenAI, responder: chat.createOpenAIResponder(failingClient) });
        const res = await postChat(base, { messages: [{ role: "user", content: "Where do Amur leopards live?" }] });
        const data = await res.json();
        server.close();

        assert.equal(res.status, status, code);
        assert.equal(data.error, code);
        assert.doesNotMatch(data.message, /no credits|slow down|network down/);
    }
});

test("provider is chosen from real keys, ignoring placeholders", function () {
    assert.equal(chooseProvider({ OPEN_AI_API_KEY: "sk-test", ANTHROPIC_API_KEY: "your-anthropic-api-key-here" }).provider, "openai");
    assert.equal(chooseProvider({ OPENAI_API_KEY: "sk-test" }).key, "sk-test");
    assert.equal(chooseProvider({ ANTHROPIC_API_KEY: "sk-ant-test" }).provider, "anthropic");
    assert.equal(chooseProvider({ ANTHROPIC_API_KEY: "your-anthropic-api-key-here" }).key, null);
    assert.equal(chooseProvider({ CHATBOT_PROVIDER: "anthropic", OPENAI_API_KEY: "sk-test" }).key, null);
});
