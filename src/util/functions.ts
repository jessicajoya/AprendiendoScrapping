const puppeteer = require("puppeteer");

export const fetchValues = async (url:string) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const buy_priceData = await page.evaluate(() => {
      return document.querySelector("div.first > span.data-compra")!
        .textContent;
    });

    const sell_priceData = await page.evaluate(() => {
      return document.querySelector("div.second > span.data-venta")!
        .textContent;
    });

    let objectValues = {
      buy_price: buy_priceData,
      sell_price: sell_priceData,
      source: url,
    };

    return objectValues;
  } catch (error) {
    throw error;
  }
};
