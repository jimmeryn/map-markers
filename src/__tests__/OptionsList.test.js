const puppeteer = require("puppeteer");

let browser;
let page;
const names = ["City", "State", "Zip", "Address", "Category"];

beforeAll(async () => {
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

describe("Rendering Elements", () => {
  it("Next button active and defined.", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector(".menu");
    expect(
      await page.$eval(".MuiButton-contained > span", (el) => el.innerText)
    ).toBe("NEXT");
  });

  it("Back button defined but not active.", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector(".menu");
    expect(await page.$eval(".Mui-disabled > span", (el) => el.innerText)).toBe(
      "BACK"
    );
  });

  it("Back button active on second step", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector(".menu");
    await page.click(".MuiButton-contained");
    expect(
      await page.$eval(".MuiButtonBase-root > span", (el) => el.innerText)
    ).toBe("BACK");
    expect(await page.$(".MuiButton-disabled")).toBeFalsy();
  });

  it("After clicking next and finish buttons menu disapears", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector(".menu");
    await page.click(".MuiButton-contained");
    expect(
      await page.$eval(".MuiButton-contained > span", (el) => el.innerText)
    ).toBe("FINISH");
    await page.click(".MuiButton-contained");
    expect(await page.$(".menu")).toBeFalsy();
  }, 160000);
});

// This function don't work as intended. Needs improvement.
// It based "from" and "to" on input value but two inputs can have same value thus we are able to use only the first one
async function SwapOption(from, to) {
  await page.click(`input[value=${from}]`);
  await page.waitForSelector("ul");
  await page.waitForSelector(".MuiPopover-root");
  await page.click(`li[data-value=${to}]`);
}

describe("Options order swapping...", () => {
  it("After changed one option the next button is disabled", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector(".menu");

    SwapOption(names[0], names[1]);

    expect(await page.$(".MuiButton-contained[disable]")).toBeDefined();
  }, 160000);
});

afterAll(() => {
  browser.close();
});
