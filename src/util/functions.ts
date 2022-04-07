const puppeteer = require("puppeteer");

export const makeDB = async () => {
  let db: any = [];
 fetchValuesDolarHoy().then((values) => db.push(values));
 fetchValuesCronista().then((values) => db.push(values));
 fetchValuesAmbito().then((values) => db.push(values));
  return db;
};



const fetchValuesDolarHoy = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://dolarhoy.com/");

    let buy_priceData = await page.evaluate(() => {
      return document.querySelector(".compra > .val")!.textContent
    });

    let sell_priceData = await page.evaluate(() => {
      return document.querySelector(".venta > .val")!.textContent;
    });

    let objectValues = {
      buy_price: parseInt(buy_priceData.replace(/[$.]/g,'')),
      sell_price: parseInt(sell_priceData.replace(/[$.]/g,'')),
      source: "https://dolarhoy.com/",
    };
    page.close();
    await browser.close();
    return objectValues;
  } catch (error) {
    throw error;
  }
};

const fetchValuesCronista = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB');

    let buy_priceData2 = await page.evaluate(() => {
      return document.querySelector('.buy-value')!
        .textContent;
    });

    let sell_priceData2 = await page.evaluate(() => {
      return document.querySelector('.sell-value')!
        .textContent;
    });

    let objectValues2 = {
      buy_price: parseInt(buy_priceData2.replace(/[$.]/g,'')),
      sell_price: parseInt(sell_priceData2.replace(/[$.]/g,'')),
      source: 'https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB',
    };
    page.close();
    await browser.close();
   
    await browser.close();
    return objectValues2;
  } catch (error) {
    throw error;
  }
};




const fetchValuesAmbito = async () => {
  try {
   
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.ambito.com/contenidos/dolar-informal.html');

    let buy_priceData3 = await page.evaluate(() => {
      return document.querySelector('div.first > span.data-compra')!
        .textContent;
    });

    let sell_priceData3 = await page.evaluate(() => {
      return document.querySelector('div.second > span.data-venta')!
        .textContent;
    });

    let objectValues3 = {
      buy_price: parseInt(buy_priceData3),
      sell_price: parseInt(sell_priceData3),
      source:'https://www.ambito.com/contenidos/dolar-informal.html',
    };
    
    page.close();
    await browser.close();

    await browser.close();
    return objectValues3;
  } catch (error) {
    throw error;
  }
};
