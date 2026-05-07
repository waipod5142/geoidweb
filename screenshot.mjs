import puppeteer from "/Users/waipodyeamkeaw/Documents/logistics/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";

const screenshotDir = path.join(__dirname, "temporary screenshots");
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir);

const existing = fs.readdirSync(screenshotDir).filter(f => f.endsWith(".png"));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || "0")).filter(n => !isNaN(n));
const next = nums.length ? Math.max(...nums) + 1 : 1;
const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  args: ["--no-sandbox"]
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "load", timeout: 60000 });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);
