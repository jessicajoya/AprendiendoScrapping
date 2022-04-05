// const axios = require ("axios");
//const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


export const fetchValues = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        
        const pageData = await page.evaluate(()=>{
            return{ pageData: document.documentElement.innerHTML,};
        });

        const buy_priceData = await page.evaluate(()=>{
           return document.querySelector('div.first > span.data-compra')!.textContent;
      });

        const sell_priceData = await page.evaluate(()=>{
        return document.querySelector('div.second > span.data-venta')!.textContent;
    
        });

     
        let objectValues ={
            buy_price: buy_priceData,
            sell_price: sell_priceData,
            source: url,
        };
        
        return objectValues;
    } catch (error) {
     throw error;
    }
   };
   
   //fetchValues('https://www.ambito.com/contenidos/dolar-informal.html').then((values) => console.log(values));