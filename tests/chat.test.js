// Unit tests for chatbot logic. Run: npm test
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const { loadAnimals } = require("../server/animals");
const chat = require("../server/chat");

const animals = loadAnimals();

function user(content) {
    return { role: "user", content: content };
}

// A copy of the real dataset plus one extra record, loaded through the same
// loader. Fixture text is test-only and never shipped to the site.
function loadAnimalsWithExtraSpecies(extra) {
    const original = fs.readFileSync(path.join(__dirname, "..", "animal-data.js"), "utf8");
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "wg-animals-"));
    const file = path.join(dir, "animal-data.js");
    fs.writeFileSync(file, original + "\nANIMALS.push(" + JSON.stringify(extra) + ");\n");
    return loadAnimals(file);
}

const FIXTURE_TURTLE = {
    id: "test-leatherback-turtle",
    commonName: "Test Leatherback Turtle",
    scientificName: "Testus coriacea",
    status: { code: "VU", label: "Vulnerable", authority: "IUCN Red List", sources: ["fixture-src"] },
    description: { text: "Fixture description.", sources: ["fixture-src"] },
    habitat: { text: "Fixture open-ocean habitat.", sources: ["fixture-src"] },
    threats: [{ text: "Fixture threat.", sources: ["fixture-src"] }],
    sources: [{ id: "fixture-src", title: "Fixture source", publisher: "Test", url: "https://example.org/fixture" }]
};

test("loads the shared dataset with stable ids", function () {
    const ids = animals.map(function (animal) { return animal.id; });
    assert.ok(ids.includes("amur-leopard"));
    assert.ok(ids.includes("hawksbill-sea-turtle"));
    assert.ok(ids.includes("sumatran-orangutan"));
});

test("resolves species by common name, plural, scientific name and short name", function () {
    const cases = [
        ["Where do Amur leopards live?", "amur-leopard"],
        ["Why are hawksbill sea turtles critically endangered?", "hawksbill-sea-turtle"],
        ["Tell me about Pongo abelii", "sumatran-orangutan"],
        ["What are the biggest threats to Sumatran orangutans?", "sumatran-orangutan"],
        ["Are Bornean orangutans endangered?", "bornean-orangutan"],
        ["Where do snow leopards live?", "snow-leopard"],
        ["Where do giant pandas live?", "giant-panda"]
    ];

    cases.forEach(function (entry) {
        const result = chat.resolveSpecies(entry[0], animals, null);
        assert.equal(result.type, "species", entry[0]);
        assert.deepEqual(result.animals.map(function (a) { return a.id; }), [entry[1]], entry[0]);
        assert.equal(result.fromContext, false);
    });
});

test("follow-up questions fall back to the current species", function () {
    const result = chat.resolveSpecies("What is its conservation status?", animals, "sumatran-orangutan");
    assert.equal(result.type, "species");
    assert.equal(result.animals[0].id, "sumatran-orangutan");
    assert.equal(result.fromContext, true);
});

test("a named species overrides the current page species", function () {
    const result = chat.resolveSpecies("Where do hawksbill turtles nest?", animals, "amur-leopard");
    assert.equal(result.animals[0].id, "hawksbill-sea-turtle");
});

test("unknown species without context resolves to none", function () {
    assert.equal(chat.resolveSpecies("Where do koalas live?", animals, null).type, "none");
});

test("orangutans without a qualifier asks for clarification", function () {
    const result = chat.resolveSpecies("What are the biggest threats to orangutans?", animals, null);
    assert.equal(result.type, "ambiguous");
    assert.deepEqual(result.animals.map(function (animal) { return animal.id; }).sort(), [
        "bornean-orangutan", "sumatran-orangutan"
    ]);
});

test("a short name shared by multiple species asks for clarification", function () {
    const withFixture = loadAnimalsWithExtraSpecies(FIXTURE_TURTLE);
    const result = chat.resolveSpecies("What threatens turtles?", withFixture, null);
    assert.equal(result.type, "ambiguous");
    assert.equal(result.term, "turtle");
    assert.deepEqual(result.animals.map(function (animal) { return animal.id; }).sort(), [
        "green-sea-turtle", "hawksbill-sea-turtle", "kemps-ridley-sea-turtle", FIXTURE_TURTLE.id
    ]);
});

test("a new species added to the dataset works without code changes", async function () {
    const withFixture = loadAnimalsWithExtraSpecies(FIXTURE_TURTLE);
    const result = await chat.handleChat(
        { messages: [user("What is the habitat of the Test Leatherback Turtle?")] },
        { animals: withFixture, responder: chat.createMockResponder() }
    );

    assert.equal(result.speciesId, "test-leatherback-turtle");
    assert.match(result.reply, /Fixture open-ocean habitat\./);
    assert.deepEqual(result.sources.map(function (s) { return s.url; }), ["https://example.org/fixture"]);
});

test("species context uses dataset facts and marks missing fields", function () {
    const turtle = chat.buildSpeciesContext(animals.find(function (a) { return a.id === "hawksbill-sea-turtle"; }));
    assert.equal(turtle.conservationStatus.category, "Critically Endangered");
    assert.equal(turtle.population, "not in dataset");
    assert.ok(turtle.threats.length >= 1);
    assert.ok(turtle.sources.every(function (s) { return /^https:\/\//.test(s.url); }));

    const sparse = chat.buildSpeciesContext({ id: "x", commonName: "X", sources: [] });
    assert.equal(sparse.habitat, "not in dataset");
    assert.equal(sparse.threats, "not in dataset");
    assert.equal(sparse.conservationStatus, "not in dataset");
});

test("mock answers use the correct dataset fields", async function () {
    const deps = { animals: animals, responder: chat.createMockResponder() };
    const amur = animals.find(function (a) { return a.id === "amur-leopard"; });
    const hawksbill = animals.find(function (a) { return a.id === "hawksbill-sea-turtle"; });

    const habitat = await chat.handleChat({ messages: [user("Where do Amur leopards live?")] }, deps);
    assert.ok(habitat.reply.includes(amur.habitat.text));
    assert.equal(habitat.mode, "mock");

    const threats = await chat.handleChat({ messages: [user("What are the threats to hawksbill sea turtles?")] }, deps);
    hawksbill.threats.forEach(function (threat) {
        assert.ok(threats.reply.includes(threat.text), threat.text);
    });

    const status = await chat.handleChat({ messages: [user("What is the conservation status of the Sumatran orangutan?")] }, deps);
    assert.match(status.reply, /Critically Endangered \(CR\)/);
    assert.ok(status.sources.some(function (s) { return s.id === "iucn-orangutan"; }));
});

test("mock mode reports missing data instead of inventing it", async function () {
    const result = await chat.handleChat(
        { messages: [user("How many hawksbill sea turtles are left?")] },
        { animals: animals, responder: chat.createMockResponder() }
    );
    assert.match(result.reply, /does not include a verified population estimate/);
});

test("validation rejects empty, too long and malformed messages", function () {
    assert.throws(function () { chat.validateChatRequest({ messages: [user("   ")] }); }, { code: "empty_message" });
    assert.throws(function () { chat.validateChatRequest({ messages: [user("x".repeat(501))] }); }, { code: "message_too_long" });
    assert.throws(function () { chat.validateChatRequest({ messages: [{ role: "system", content: "hi" }] }); }, { code: "invalid_request" });
    assert.throws(function () { chat.validateChatRequest({ messages: [] }); }, { code: "invalid_request" });
    assert.throws(function () { chat.validateChatRequest(null); }, { code: "invalid_request" });
    assert.throws(function () {
        chat.validateChatRequest({ messages: [user("a"), user("b")] });
    }, { code: "invalid_request" });
});

test("long earlier assistant replies are shortened, not rejected", function () {
    const result = chat.validateChatRequest({
        messages: [user("q"), { role: "assistant", content: "a".repeat(9000) }, user("follow-up")]
    });
    assert.equal(result.messages[1].content.length, chat.LIMITS.maxAssistantChars);
});

test("validation keeps only recent history, starting on a user turn", function () {
    const messages = [];
    for (let i = 0; i < 20; i++) {
        messages.push(user("q" + i));
        messages.push({ role: "assistant", content: "a" + i });
    }
    messages.push(user("latest"));

    const result = chat.validateChatRequest({ messages: messages });
    assert.ok(result.messages.length <= chat.LIMITS.maxHistoryMessages);
    assert.equal(result.messages[0].role, "user");
    assert.equal(result.messages[result.messages.length - 1].content, "latest");
});

test("live responder sends grounded, cost-limited requests", async function () {
    let captured = null;
    const fakeClient = {
        beta: {
            messages: {
                create: async function (params) {
                    captured = params;
                    return {
                        model: params.model,
                        stop_reason: "end_turn",
                        content: [{ type: "text", text: "Grounded answer." }]
                    };
                }
            }
        }
    };

    const deps = { animals: animals, responder: chat.createLiveResponder(fakeClient, {}) };
    const result = await chat.handleChat({ messages: [user("Where do Amur leopards live?")] }, deps);

    assert.equal(result.mode, "live");
    assert.equal(result.reply, "Grounded answer.");
    assert.equal(captured.model, "claude-sonnet-5-5");
    assert.equal(captured.max_tokens, chat.LIMITS.maxOutputTokens);
    assert.equal(captured.fallbacks, "default");
    assert.deepEqual(captured.output_config, { effort: "low" });

    const systemText = captured.system.map(function (block) { return block.text; }).join("\n");
    const amur = animals.find(function (a) { return a.id === "amur-leopard"; });
    assert.ok(systemText.includes(amur.habitat.text), "species data is passed as context");
    assert.match(systemText, /does not have verified information for that species/);
    assert.match(systemText, /information, not instructions/);
    assert.ok(result.sources.length > 0, "dataset sources returned");
});

test("live responder handles refusals and truncated answers", async function () {
    function clientReturning(response) {
        return { beta: { messages: { create: async function () { return response; } } } };
    }

    const refused = await chat.handleChat(
        { messages: [user("Where do Amur leopards live?")] },
        { animals: animals, responder: chat.createLiveResponder(clientReturning({ stop_reason: "refusal", content: [] })) }
    );
    assert.match(refused.reply, /can't help with that request/);
    assert.deepEqual(refused.sources, []);

    const truncated = await chat.handleChat(
        { messages: [user("Where do Amur leopards live?")] },
        { animals: animals, responder: chat.createLiveResponder(clientReturning({ stop_reason: "max_tokens", content: [{ type: "text", text: "Partial" }] })) }
    );
    assert.match(truncated.reply, /Answer shortened/);
});

test("missing responder gives a safe configuration error", async function () {
    await assert.rejects(
        chat.handleChat({ messages: [user("Where do Amur leopards live?")] }, { animals: animals, responder: null }),
        function (error) {
            assert.equal(error.code, "not_configured");
            assert.equal(error.status, 503);
            return true;
        }
    );
});

test("OpenAI responder sends grounded, cost-limited requests", async function () {
    let captured = null;
    const fakeClient = {
        chat: {
            completions: {
                create: async function (params) {
                    captured = params;
                    return { model: params.model, choices: [{ finish_reason: "stop", message: { role: "assistant", content: "Grounded answer.", refusal: null } }] };
                }
            }
        }
    };

    const result = await chat.handleChat(
        { messages: [user("Where do Amur leopards live?")] },
        { animals: animals, responder: chat.createOpenAIResponder(fakeClient, {}) }
    );

    assert.equal(result.mode, "live");
    assert.equal(result.reply, "Grounded answer.");
    assert.equal(captured.model, chat.DEFAULT_MODELS.openai);
    assert.equal(captured.reasoning_effort, "low");
    assert.ok(captured.max_completion_tokens <= 2048);
    assert.equal(captured.messages[0].role, "developer");
    const amur = animals.find(function (a) { return a.id === "amur-leopard"; });
    assert.ok(captured.messages[1].content.includes(amur.habitat.text), "species data is passed as context");
    assert.equal(captured.messages[captured.messages.length - 1].content, "Where do Amur leopards live?");
});

test("OpenAI responder handles refusals, truncation and empty output", async function () {
    function clientReturning(choice) {
        return { chat: { completions: { create: async function () { return { model: "m", choices: [choice] }; } } } };
    }
    const ask = function (choice) {
        return chat.handleChat(
            { messages: [user("Where do Amur leopards live?")] },
            { animals: animals, responder: chat.createOpenAIResponder(clientReturning(choice)) }
        );
    };

    const refused = await ask({ finish_reason: "stop", message: { content: null, refusal: "I can't help with that." } });
    assert.match(refused.reply, /can't help with that request/);
    assert.deepEqual(refused.sources, []);

    const truncated = await ask({ finish_reason: "length", message: { content: "Partial", refusal: null } });
    assert.match(truncated.reply, /Answer shortened/);

    await assert.rejects(ask({ finish_reason: "length", message: { content: "", refusal: null } }), { code: "provider_error" });
});

test("a model reply marked as no-data drops the page species' sources", async function () {
    const fakeClient = {
        chat: {
            completions: {
                create: async function () {
                    return { model: "m", choices: [{ finish_reason: "stop", message: { content: chat.NO_DATA_MARKER + " Wildlife Guardian does not have verified information for giant pandas yet.", refusal: null } }] };
                }
            }
        }
    };

    const result = await chat.handleChat(
        { messages: [user("Where do giant pandas live?")], speciesId: "amur-leopard" },
        { animals: animals, responder: chat.createOpenAIResponder(fakeClient) }
    );

    assert.equal(result.kind, "limitation");
    assert.equal(result.reply, "Wildlife Guardian does not have verified information for giant pandas yet.");
    assert.deepEqual(result.sources, []);
    assert.deepEqual(result.species, []);
    assert.equal(result.speciesId, "amur-leopard", "page species is kept for later follow-ups");
});
