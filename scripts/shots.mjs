import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3211", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
await page.screenshot({ path: "/tmp/phipsi-hero.png" });

// scroll through the journey
await page.evaluate(() => document.getElementById("plan")?.scrollIntoView());
await page.waitForTimeout(1600);
await page.screenshot({ path: "/tmp/phipsi-plan-intro.png" });

await page.evaluate(() => window.scrollBy(0, 1400));
await page.waitForTimeout(1600);
await page.screenshot({ path: "/tmp/phipsi-stop1.png" });

await page.evaluate(() => window.scrollBy(0, 2600));
await page.waitForTimeout(1600);
await page.screenshot({ path: "/tmp/phipsi-stop3.png" });

// shirt section (3D)
await page.evaluate(() => document.getElementById("shirt")?.scrollIntoView());
await page.waitForTimeout(5000);
await page.screenshot({ path: "/tmp/phipsi-shirt-back.png" });

// flip to front
await page.getByRole("button", { name: "front" }).click();
await page.waitForTimeout(2500);
await page.screenshot({ path: "/tmp/phipsi-shirt-front.png" });

// glossary + footer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1800);
await page.screenshot({ path: "/tmp/phipsi-footer.png" });

const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
console.log("done", errors);
await browser.close();
