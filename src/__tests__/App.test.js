import * as puppeteer from "puppeteer";

let browser;
let page;

puppeteer.beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  page.emulate({
    viewport: {
      width: 800,
      height: 600,
    },
    userAgent: "",
  });
});

puppeteer.describe("Rendering Elements", () => {
  it("Rendering map", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector(".map");
    expect(await page.$(".map")).toBeDefined();
  });

  it("Rendering menu", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector(".menu");
    expect(await page.$(".menu")).toBeDefined();
  });
});

puppeteer.afterAll(() => {
  browser.close();
});
