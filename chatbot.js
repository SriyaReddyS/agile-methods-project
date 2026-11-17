/* ==================================
   Wildlife Guardian
   Species Q&A chatbot widget
   ----------------------------------
   Adds an "Ask Wildlife Guardian" button and
   chat panel to the page. Questions go to the
   site's own server at /api/chat, which looks
   up the shared ANIMALS data and calls the AI
   service. No API keys live in this file.

   On animal.html?id=<species-id> the chat
   starts with that species selected, so
   "What is its conservation status?" works.
   Load after animal-data.js.
================================== */

(function () {

    const CHAT_ENDPOINT = "api/chat";
    const MAX_MESSAGE_CHARS = 500;
    const REQUEST_TIMEOUT_MS = 30000;
    // Matches the server's history limits so long chats stay within request size.
    const MAX_HISTORY_MESSAGES = 12;
    const MAX_ASSISTANT_CHARS = 2000;

    const ERROR_HINTS = {
        not_configured: "The chatbot is not set up on this server yet.",
        rate_limited: "Too many questions in a short time. Please wait a minute and try again.",
        provider_busy: "The chatbot is busy right now. Please try again in a minute.",
        provider_quota: "The chatbot is unavailable right now. Please tell the site team.",
        provider_timeout: "The chatbot took too long to answer. Please try again.",
        provider_unavailable: "The chatbot could not reach its AI service. Please try again later.",
        offline: "The chatbot server could not be reached. If you opened this page as a file, start the site with `npm start` and visit http://localhost:8000/."
    };

    const MODE_LABELS = {
        live: "AI answer based on Wildlife Guardian's species profiles",
        mock: "Demo mode: built from site data, not AI-generated",
        rules: "Automatic reply"
    };

    document.addEventListener("DOMContentLoaded", function () {
        const animals = typeof ANIMALS !== "undefined" ? ANIMALS : [];
        const pageAnimal = getPageAnimal();

        const state = {
            history: [],
            speciesId: pageAnimal ? pageAnimal.id : null,
            busy: false
        };

        const ui = buildWidget(pageAnimal, animals);
        document.body.appendChild(ui.root);

        ui.toggle.addEventListener("click", function () {
            setOpen(ui, ui.panel.hidden);
        });

        ui.close.addEventListener("click", function () {
            setOpen(ui, false);
        });

        ui.panel.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setOpen(ui, false);
            }
        });

        ui.form.addEventListener("submit", function (event) {
            event.preventDefault();
            submitQuestion(ui.input.value, ui, state);
        });

        ui.suggestions.addEventListener("click", function (event) {
            const button = event.target.closest("button[data-question]");
            if (button) {
                submitQuestion(button.getAttribute("data-question"), ui, state);
            }
        });

        ui.input.addEventListener("input", function () {
            ui.status.textContent = "";
        });
    });

    /* ==================================
       Page context
    ================================== */

    // The species shown on animal.html?id=..., if any.
    function getPageAnimal() {
        if (typeof getAnimalById !== "function" || !document.getElementById("animal-profile")) {
            return null;
        }

        const id = new URLSearchParams(window.location.search).get("id");
        return id ? getAnimalById(id) || null : null;
    }

    /* ==================================
       DOM building (safe APIs only)
    ================================== */

    function el(tagName, className, text) {
        const element = document.createElement(tagName);
        if (className) {
            element.className = className;
        }
        if (text) {
            element.textContent = text;
        }
        return element;
    }

    function buildWidget(pageAnimal, animals) {
        const root = el("div", "chatbot");

        const toggle = el("button", "chatbot-toggle", "Ask Wildlife Guardian");
        toggle.type = "button";
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-controls", "chatbot-panel");

        const panel = el("section", "chatbot-panel");
        panel.id = "chatbot-panel";
        panel.hidden = true;
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-modal", "false");
        panel.setAttribute("aria-labelledby", "chatbot-title");

        const header = el("div", "chatbot-header");
        const titleWrap = el("div");
        const title = el("h2", "chatbot-title", "Ask about endangered animals");
        title.id = "chatbot-title";
        const context = el(
            "p",
            "chatbot-context",
            pageAnimal ? "Asking about: " + pageAnimal.commonName : "Answers use Wildlife Guardian's species profiles"
        );
        titleWrap.appendChild(title);
        titleWrap.appendChild(context);

        const close = el("button", "chatbot-close", "✕");
        close.type = "button";
        close.setAttribute("aria-label", "Close chat");

        header.appendChild(titleWrap);
        header.appendChild(close);

        const log = el("div", "chatbot-log");
        log.setAttribute("role", "log");
        log.setAttribute("aria-live", "polite");
        log.setAttribute("aria-label", "Chat messages");

        log.appendChild(createIntroMessage(pageAnimal, animals));

        if (window.location.protocol === "file:") {
            log.appendChild(createNotice(ERROR_HINTS.offline));
        }

        const suggestions = el("div", "chatbot-suggestions");
        createSuggestions(pageAnimal, animals).forEach(function (question) {
            const chip = el("button", "chatbot-chip", question);
            chip.type = "button";
            chip.setAttribute("data-question", question);
            suggestions.appendChild(chip);
        });

        const form = el("form", "chatbot-form");
        form.noValidate = true;

        const label = el("label", "visually-hidden", "Your question");
        label.setAttribute("for", "chatbot-input");

        const input = el("input", "chatbot-input");
        input.id = "chatbot-input";
        input.type = "text";
        input.maxLength = MAX_MESSAGE_CHARS;
        input.autocomplete = "off";
        input.placeholder = pageAnimal
            ? "Ask about the " + pageAnimal.commonName + "…"
            : "Ask about an animal…";
        input.setAttribute("aria-describedby", "chatbot-status");

        const send = el("button", "chatbot-send", "Send");
        send.type = "submit";

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(send);

        const status = el("p", "chatbot-status");
        status.id = "chatbot-status";
        status.setAttribute("aria-live", "assertive");

        panel.appendChild(header);
        panel.appendChild(log);
        panel.appendChild(suggestions);
        panel.appendChild(form);
        panel.appendChild(status);

        root.appendChild(panel);
        root.appendChild(toggle);

        return {
            root: root,
            toggle: toggle,
            panel: panel,
            close: close,
            log: log,
            suggestions: suggestions,
            form: form,
            input: input,
            send: send,
            status: status,
            context: context
        };
    }

    function createIntroMessage(pageAnimal, animals) {
        const names = animals.map(function (animal) { return animal.commonName; }).join(", ");
        const text = pageAnimal
            ? "Hi! Ask me about the " + pageAnimal.commonName +
              ": where it lives, what threatens it, its conservation status, or how people can help."
            : "Hi! Ask me about an animal on Wildlife Guardian" + (names ? " (" + names + ")" : "") +
              ": where it lives, what threatens it, its conservation status, or how people can help.";

        const message = el("div", "chatbot-message chatbot-message--assistant");
        message.appendChild(el("p", null, text));
        return message;
    }

    function createSuggestions(pageAnimal, animals) {
        if (pageAnimal) {
            return [
                "Where does it live?",
                "What are its biggest threats?",
                "How can people help?"
            ];
        }

        return animals.slice(0, 3).map(function (animal) {
            return "Why is the " + animal.commonName + " endangered?";
        });
    }

    function createNotice(text) {
        const notice = el("div", "chatbot-message chatbot-message--error");
        notice.appendChild(el("p", null, text));
        return notice;
    }

    // Render plain-text reply: blank-line paragraphs and "- " bullet lines.
    function appendReplyText(container, text) {
        let list = null;

        String(text).split("\n").forEach(function (line) {
            const trimmed = line.trim();

            if (!trimmed) {
                list = null;
                return;
            }

            const bullet = trimmed.match(/^[-•*]\s+(.*)$/);

            if (bullet) {
                if (!list) {
                    list = el("ul", "chatbot-list");
                    container.appendChild(list);
                }
                list.appendChild(el("li", null, bullet[1]));
                return;
            }

            list = null;
            container.appendChild(el("p", null, trimmed));
        });
    }

    function createAssistantMessage(result) {
        const message = el("div", "chatbot-message chatbot-message--assistant");
        appendReplyText(message, result.reply);

        const species = Array.isArray(result.species) ? result.species : [];
        const options = Array.isArray(result.options) ? result.options : [];
        const profileLinks = species.concat(options);

        if (profileLinks.length) {
            const links = el("p", "chatbot-profile-links");
            profileLinks.forEach(function (animal, index) {
                if (index > 0) {
                    links.appendChild(document.createTextNode(" · "));
                }
                const link = el("a", null, "View " + animal.commonName + " profile");
                link.href = animal.profileUrl;
                links.appendChild(link);
            });
            message.appendChild(links);
        }

        if (Array.isArray(result.sources) && result.sources.length) {
            const sources = el("div", "chatbot-sources");
            sources.appendChild(el("p", "chatbot-sources-title", "Sources from our profile data:"));
            const list = el("ul");

            result.sources.forEach(function (source) {
                const item = el("li");
                const link = el("a", null, source.title);
                link.href = source.url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                item.appendChild(link);
                if (source.publisher) {
                    item.appendChild(document.createTextNode(" — " + source.publisher));
                }
                list.appendChild(item);
            });

            sources.appendChild(list);
            message.appendChild(sources);
        }

        if (MODE_LABELS[result.mode]) {
            const badge = el(
                "p",
                "chatbot-badge" + (result.mode === "mock" ? " chatbot-badge--mock" : ""),
                MODE_LABELS[result.mode]
            );
            message.appendChild(badge);
        }

        return message;
    }

    /* ==================================
       Behaviour
    ================================== */

    function setOpen(ui, open) {
        ui.panel.hidden = !open;
        ui.toggle.setAttribute("aria-expanded", String(open));
        ui.root.classList.toggle("chatbot--open", open);

        if (open) {
            ui.input.focus();
        } else {
            ui.toggle.focus();
        }
    }

    function setBusy(ui, state, busy) {
        state.busy = busy;
        ui.send.disabled = busy;
        ui.input.setAttribute("aria-busy", String(busy));
        ui.send.textContent = busy ? "Sending…" : "Send";
        Array.prototype.forEach.call(ui.suggestions.querySelectorAll("button"), function (button) {
            button.disabled = busy;
        });
    }

    function scrollToEnd(ui) {
        ui.log.scrollTop = ui.log.scrollHeight;
    }

    async function submitQuestion(rawText, ui, state) {
        if (state.busy) {
            return;
        }

        const text = String(rawText || "").trim();

        // Empty input: no request is sent.
        if (!text) {
            ui.status.textContent = "Please type a question first.";
            ui.input.focus();
            return;
        }

        if (text.length > MAX_MESSAGE_CHARS) {
            ui.status.textContent = "Please keep questions under " + MAX_MESSAGE_CHARS + " characters.";
            return;
        }

        ui.status.textContent = "";
        ui.input.value = "";
        ui.suggestions.hidden = true;

        const userMessage = el("div", "chatbot-message chatbot-message--user");
        userMessage.appendChild(el("p", null, text));
        ui.log.appendChild(userMessage);

        const loading = el("div", "chatbot-message chatbot-message--assistant chatbot-message--loading");
        loading.appendChild(el("p", null, "Looking that up…"));
        ui.log.appendChild(loading);
        scrollToEnd(ui);

        setBusy(ui, state, true);

        const messages = trimHistory(state.history).concat([{ role: "user", content: text }]);

        try {
            const result = await postChat({ messages: messages, speciesId: state.speciesId });

            loading.remove();
            ui.log.appendChild(createAssistantMessage(result));

            // Keep history so follow-up questions have context.
            state.history = messages.concat([{ role: "assistant", content: result.reply }]);

            if (result.speciesId) {
                state.speciesId = result.speciesId;
                const current = (result.species || [])[0];
                if (current) {
                    ui.context.textContent = "Asking about: " + current.commonName;
                }
            }
        } catch (error) {
            loading.remove();
            ui.log.appendChild(createNotice(error.message));
            // Let the visitor retry without retyping.
            ui.input.value = text;
        } finally {
            setBusy(ui, state, false);
            scrollToEnd(ui);
            ui.input.focus();
        }
    }

    // Keep the most recent turns, starting on a user message.
    function trimHistory(history) {
        let recent = history.slice(-(MAX_HISTORY_MESSAGES - 1)).map(function (message) {
            return {
                role: message.role,
                content: message.role === "assistant"
                    ? message.content.slice(0, MAX_ASSISTANT_CHARS)
                    : message.content
            };
        });

        while (recent.length && recent[0].role !== "user") {
            recent = recent.slice(1);
        }

        return recent;
    }

    async function postChat(payload) {
        const controller = new AbortController();
        const timer = setTimeout(function () { controller.abort(); }, REQUEST_TIMEOUT_MS);
        let response;

        try {
            response = await fetch(CHAT_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
        } catch (error) {
            throw new Error(error.name === "AbortError" ? ERROR_HINTS.provider_timeout : ERROR_HINTS.offline);
        } finally {
            clearTimeout(timer);
        }

        let data = null;

        try {
            data = await response.json();
        } catch (error) {
            data = null;
        }

        if (!response.ok || !data || typeof data.reply !== "string") {
            const code = data && data.error;
            const message = (data && data.message) || ERROR_HINTS[code] ||
                ([404, 405, 501].indexOf(response.status) !== -1 ? ERROR_HINTS.offline : null) ||
                "Something went wrong. Please try again.";
            throw new Error(message);
        }

        return data;
    }

})();
