# Wildlife Guardian

Discover. Learn. Protect. An educational website about endangered animals.

## Running the site

The pages are static HTML/CSS/JavaScript. You can open `index.html` directly, but the
AI chatbot needs the small Node server in `server/`, which serves the site and the
`/api/chat` endpoint.

Requires Node.js 22 or newer.

```sh
npm install
npm run start:mock   # demo mode: answers built from animal-data.js, no API key needed
npm start            # live mode: calls OpenAI or Claude (needs OPENAI_API_KEY or ANTHROPIC_API_KEY)
```

Then visit http://localhost:8000/animal.html?id=amur-leopard and select **Ask Wildlife Guardian**.

## Using the chatbot in the browser

The chatbot only works when the site is served by the Node server. If you open the HTML
files directly (`file://`), the chat shows a "start the server" message instead.

1. Start the server from the project folder:

   ```sh
   npm install        # first time only
   npm start
   ```

   The terminal should show `Chatbot mode: live (openai, model gpt-5.4-mini)`. If it says
   `unconfigured`, add your key to `.env` (see [Configuration](#configuration)).

2. Open http://localhost:8000/animal.html?id=amur-leopard in your browser.
3. Click the green **Ask Wildlife Guardian** button in the bottom-right corner.
4. Type a question and press Enter, for example "Where does it live?", then ask a
   follow-up such as "What threatens them?"

The chat button also appears on **Explore Animals** (`animals.html`) and on every animal
profile page. It does not appear on the homepage.

Press `Ctrl+C` in the terminal to stop the server. To try the chat without using API
credits, run `npm run start:mock` instead. Mock answers are labelled "Demo mode".

## AI chatbot

The chat widget (`chatbot.js`, `chatbot.css`) is on `animal.html` and `animals.html`.
On a profile page it starts with that species selected, so follow-up questions such as
"What is its conservation status?" work.

How it works:

1. The browser sends the question and recent chat history to `POST /api/chat`.
2. `server/chat.js` works out which species the question is about, using names from the
   shared `ANIMALS` data in `animal-data.js` (loaded by `server/animals.js`).
3. The server sends the species' profile data to the configured AI provider (OpenAI
   `gpt-5.4-mini` by default, or Anthropic Claude `claude-sonnet-5-5`) with rules to answer
   only from that data and to say when information is missing.
4. Source links shown under each answer come from the species record, never from the model.

### Configuration

Copy `.env.example` to `.env` and fill in values. `.env` is git-ignored: never commit it.

| Variable | Required | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | Live mode (one key) | OpenAI API key (`OPEN_AI_API_KEY` also accepted). Server-side only. |
| `ANTHROPIC_API_KEY` | Live mode (one key) | Anthropic Claude API key. Server-side only. |
| `CHATBOT_PROVIDER` | No | `openai` or `anthropic`. Default: OpenAI if its key is set, otherwise Anthropic. |
| `CHATBOT_MODE` | No | `live` (default) or `mock`. |
| `OPENAI_MODEL` | No | Default `gpt-5.4-mini`. |
| `ANTHROPIC_MODEL` | No | Default `claude-sonnet-5-5`. |
| `PORT` | No | Server port. Default `8000`. |

If no key is set in live mode, the chatbot shows a configuration error and
the rest of the site keeps working.

Cost and safety limits: questions up to 500 characters, the last 12 messages of history,
replies up to 1,024 output tokens on Claude or 2,048 completion tokens (including
reasoning) on OpenAI, at low reasoning effort, request bodies up to 32 KB, and
20 chat requests per minute per visitor IP.

### Adding a species

Add one record to `ANIMALS` in `animal-data.js` and restart the server. The chatbot
recognises the new species by its `commonName`, `scientificName`, and `id`. No chatbot
code changes are needed.

### Tests

```sh
npm test
```

Runs the Node built-in test runner on `tests/`. Tests use mocked LLM responses and make no
network calls.

### Deployment

Static hosting alone (for example GitHub Pages) cannot run `/api/chat`. To deploy the
chatbot, run `npm start` on a Node host and set `OPENAI_API_KEY` (or `ANTHROPIC_API_KEY`) as an environment
variable in that host's settings.
