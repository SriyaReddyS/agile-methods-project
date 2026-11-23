const { chromium } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { loadAnimals } = require("../server/animals");

const animals = loadAnimals();
const base = process.env.SITE_URL || "http://127.0.0.1:8000/";
const screenshots = process.env.SCREENSHOT_DIR;
const evidence = [];

async function open(page, route) {
    const response = await page.goto(new URL(route, base).href, { waitUntil: "load" });
    assert.equal(response.status(), 200, route);
    assert.ok(await page.evaluate(() =>
        document.documentElement.scrollWidth <= window.innerWidth
    ), route + " overflows the viewport");
}

async function checkImages(locator, count) {
    assert.equal(await locator.count(), count);
    const broken = await locator.evaluateAll(async images => {
        await Promise.all(images.map(async image => {
            image.loading = "eager";
            await image.decode().catch(() => {});
        }));
        return images.filter(image => !image.naturalWidth || !image.alt).map(image => image.src);
    });
    assert.deepEqual(broken, []);
}

async function capture(page, name) {
    if (screenshots) await page.screenshot({ path: path.join(screenshots, name + ".png") });
}

async function checkViewport(browser, viewport) {
    const page = await browser.newPage({ viewport });
    page.setDefaultTimeout(12000);
    const problems = [];
    page.on("pageerror", error => problems.push(error.message));
    page.on("console", message => {
        if (message.type() === "error") problems.push(message.text() + " " + message.location().url);
    });
    page.on("response", response => {
        if (response.status() >= 400) problems.push(response.status() + " " + response.url());
    });
    try {
        await open(page, "index.html");
        assert.equal(await page.locator("[data-home-animals] .animal-card").count(), 6);
        const menu = page.getByRole("button", { name: "Toggle navigation" });
        if (await menu.isVisible()) {
            await menu.click();
            assert.equal(await menu.getAttribute("aria-expanded"), "true");
        }

        await page.getByRole("navigation", { name: "Main navigation" })
            .getByRole("link", { name: "Explore Animals" }).click();
        await page.waitForURL("**/animals.html");
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
        const cards = page.locator(".animal-card");
        assert.equal(await cards.count(), 50);
        assert.equal(await page.locator(".animal-card-placeholder").count(), 0);
        await checkImages(cards.locator("img"), 50);
        const links = cards.locator(".animal-card-link");
        const routes = await links.evaluateAll(nodes => nodes.map(node => node.getAttribute("href")));
        assert.deepEqual(routes, animals.map(a => "animal.html?id=" + a.id));
        await capture(page, "directory-" + viewport.width);
        if (screenshots && viewport.width === 390) {
            await cards.first().scrollIntoViewIfNeeded();
            await capture(page, "directory-cards-390");
            await page.evaluate(() => window.scrollTo(0, 0));
        }

        const search = page.locator("#animal-search-input");
        const status = page.locator("#status-filter");
        const habitat = page.locator("#habitat-filter");
        const reset = page.locator("#reset-filters");
        await search.fill("  whale  ");
        assert.deepEqual(await cards.locator("h3").allTextContents(),
            animals.filter(a => a.commonName.toLowerCase().includes("whale")).map(a => a.commonName));
        await status.selectOption("Endangered");
        assert.deepEqual(await cards.locator("h3").allTextContents(), ["Blue Whale", "Whale Shark"]);
        await search.fill("no such animal");
        assert.equal(await cards.count(), 0);
        assert.equal(await page.locator(".animal-cards-message").textContent(), "No animals to show yet.");
        await page.locator("#clear-animal-search").click();
        assert.equal(await search.inputValue(), "");
        assert.equal(await status.inputValue(), "Endangered");
        await reset.click();

        for (const label of ["Critically Endangered", "Endangered", "Vulnerable", "Near Threatened", "Least Concern"]) {
            await status.selectOption(label);
            assert.deepEqual(await cards.locator("h3").allTextContents(),
                animals.filter(a => a.status.label === label).map(a => a.commonName));
        }
        await reset.click();

        for (const tag of ["temperate", "marine", "tropical"]) {
            await habitat.selectOption(tag);
            assert.deepEqual(await cards.locator("h3").allTextContents(),
                animals.filter(a => a.habitat.filters?.includes(tag)).map(a => a.commonName));
        }
        await habitat.selectOption("marine");
        assert.equal(await cards.getByRole("heading", { name: "Blue Whale", exact: true }).count(), 1);
        await reset.click();
        assert.equal(await cards.count(), 50);

        const externalLinks = new Set();
        await links.first().click();
        for (const [index, route] of routes.entries()) {
            const animal = animals[index];
            if (index === 0) {
                await page.waitForURL("**/" + route);
            } else {
                await open(page, route);
            }
            assert.equal(await page.locator("main h1").textContent(), animal.commonName);
            assert.equal(await page.locator(".scientific-name").textContent(), animal.scientificName);
            assert.equal(await page.locator(".status-code").textContent(), animal.status.code);
            assert.equal(await page.getByRole("heading", { name: "How You Can Help in Pittsburgh" }).count(), 1);
            assert.equal(await page.locator(".local-action-card").count(), (animal.localActions || animal.protectionActions).length);
            await checkImages(page.locator(".profile-header img"), 1);
            const sources = await page.locator(".source-list a").evaluateAll(nodes => nodes.map(node => node.getAttribute("href")));
            assert.deepEqual(sources, animal.sources.map(source => source.url));
            for (const link of await page.locator("main a[href^='https://']").evaluateAll(nodes => nodes.map(node => node.href))) {
                externalLinks.add(link);
            }

            const pagination = page.getByRole("navigation", { name: "Animal profile navigation" });
            const expected = [...routes.slice(Math.max(0, index - 1), index), "animals.html", ...routes.slice(index + 1, index + 2)];
            const actual = await pagination.getByRole("link").evaluateAll(nodes => nodes.map(node => node.getAttribute("href")));
            assert.deepEqual(actual, expected);
            if (animal.id === "african-savanna-elephant") await capture(page, "profile-" + viewport.width);
        }

        await page.getByRole("link", { name: "Previous Animal" }).click();
        await page.waitForURL("**/" + routes.at(-2));
        await page.getByRole("link", { name: "Next Animal" }).click();
        await page.waitForURL("**/" + routes.at(-1));
        await page.getByRole("link", { name: "All Animals" }).click();
        await page.waitForURL("**/animals.html");
        assert.equal(await cards.count(), 50);
        if (await menu.isVisible()) await menu.click();
        await page.getByRole("navigation", { name: "Main navigation" })
            .getByRole("link", { name: "About Us" }).click();
        await page.waitForURL("**/index.html#about");
        assert.ok(await page.locator("#about").isVisible());

        assert.deepEqual(problems, []);
        evidence.push({ viewport, cards: routes.length, details: routes.length, externalLinks: [...externalLinks].sort(), problems });
        console.log("PASS " + viewport.width + "x" + viewport.height + " | 50 cards, 50 details, images, filters and navigation | " + externalLinks.size + " distinct external links");
    } finally {
        await page.close();
    }
}

(async () => {
    if (screenshots) fs.mkdirSync(screenshots, { recursive: true });
    const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
    try {
        console.log("Chromium " + browser.version());
        for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
            await checkViewport(browser, viewport);
        }
        if (process.env.BROWSER_EVIDENCE) fs.writeFileSync(process.env.BROWSER_EVIDENCE, JSON.stringify(evidence, null, 2) + "\n");
    } finally {
        await browser.close();
    }
})().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
