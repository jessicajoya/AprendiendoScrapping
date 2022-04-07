const puppeteer = require("puppeteer");



export const fetchValues = async () => {
  let bd = []
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();


    // ***
    await page.goto('https://dolarhoy.com/');

    let buy_priceData = await page.evaluate(() => {
      return document.querySelector('.compra > .val')!
        .textContent;
    });

    let sell_priceData = await page.evaluate(() => {
      return document.querySelector('.venta > .val')!
        .textContent;
    });

    let objectValues = {
      buy_price: buy_priceData,
      sell_price: sell_priceData,
      source: 'https://dolarhoy.com/',
    };
    bd.push(objectValues);
    page.close();
    // // ****
    // await page.goto('https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB');

    // let buy_priceData2 = await page.evaluate(() => {
    //   return document.querySelector('.buy-value')!
    //     .textContent;
    // });

    // let sell_priceData2 = await page.evaluate(() => {
    //   return document.querySelector('.sell-value')!
    //     .textContent;
    // });

    // let objectValues2 = {
    //   buy_price: buy_priceData2,
    //   sell_price: sell_priceData2,
    //   source: 'https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB',
    // };
    // bd.push(objectValues2);
    // page.close();

    // // ***
    // await page.goto('https://www.ambito.com/contenidos/dolar-informal.html');

    // let buy_priceData3 = await page.evaluate(() => {
    //   return document.querySelector('div.first > span.data-compra')!
    //     .textContent;
    // });

    // let sell_priceData3 = await page.evaluate(() => {
    //   return document.querySelector('div.second > span.data-venta')!
    //     .textContent;
    // });

    // let objectValues3 = {
    //   buy_price: buy_priceData3,
    //   sell_price: sell_priceData3,
    //   source:'https://www.ambito.com/contenidos/dolar-informal.html',
    // };
    // bd.push(objectValues3);
    // page.close();
    // // ***

    await browser.close();
    return bd;
  } catch (error) {
    throw error;
  }
};
