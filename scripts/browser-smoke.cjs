const { chromium } = require("playwright");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  const base = "http://127.0.0.1:8000/";
  await page.goto(base + "index.html", { waitUntil: "domcontentloaded" });
  await page.locator(".home-species-card").first().waitFor();
  assert.equal(await page.locator(".home-species-card").count(), 6);
  await page.goto(base + "animals.html", { waitUntil: "domcontentloaded" });
  await page.locator(".animal-card").first().waitFor();
  assert.equal(await page.locator(".animal-card").count(), 20);
  for (const id of ["amur-leopard","red-panda","blue-whale","vaquita","javan-rhino","polar-bear"]) {
    await page.goto(base + "animal.html?id=" + id, { waitUntil: "domcontentloaded" });
    await page.locator(".profile-pagination").waitFor();
    assert.ok((await page.locator("main").innerText()).includes("How You Can Help in Pittsburgh"), id);
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(base + "index.html", { waitUntil: "domcontentloaded" });
  await page.locator(".home-species-card").first().waitFor();
  assert.equal(await page.locator(".home-species-card").count(), 6);
  assert.equal(errors.length, 0, "Browser JS errors: " + errors.join("; "));
  await browser.close();
  console.log("PASS: desktop and mobile browser smoke checks, 20 cards, 6 featured cards, and detail navigation");
})().catch(e => { console.error(e); process.exit(1); });
