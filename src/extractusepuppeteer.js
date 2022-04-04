// const puppeteer = require('puppeteer');
// const cheerio = require('cheerio');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.ambito.com/contenidos/dolar-informal.html');

// const dolarCompra = await page.evaluate(()=>{
//            return{ compra: document.querySelector('div.first > span.data-compra').innerText,
//         };
//       });

// const dolarVenta = await page.evaluate(()=>{
//         return{venta: document.querySelector('div.second > span.data-venta').innerText,
//      };
//    });

// console.log(dolarCompra,dolarVenta)
//   await browser.close();
// })();












// const puppeteer = require('puppeteer');
// // const cheerio = require('cheerio');
// const dinamicElements = async () => {
//     try {

//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.ambito.com/contenidos/dolar.html');
//   await page.screenshot({ path: 'example.png' });

//   const pageData = await page.evaluate(()=>{
//        return{ pageData: document.documentElement.innerHTML,
//     };
//   });
// // console.log(pageData)

//   await browser.close();
//   return pageData

// } catch (error) {
//     throw error;
//    }
//   };
  
//   dinamicElements().then((pageData) => console.log(titles));