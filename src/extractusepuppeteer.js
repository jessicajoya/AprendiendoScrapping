
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({headless:false});
//   const page = await browser.newPage();
//   await page.goto('https://www.ambito.com/contenidos/dolar.html');
//   await page.screenshot({ path: 'example.png' });
// //   await page.waitForSelector('[data-indice="/dolar/informal]')
 
// await page.waitForTimeout(3000);
// await page.evaluate(()=>{
//         const elements = document.querySelectorAll('[data-indice="/dolar/informal] div');
//         const componentsblue=[];
//         for (let e of elements){
//             componentsblue.push(element.spam);
//         }
//         return componentsblue;
//   })    
//   console.log("++++++++++++++++++++++"+componentsblue)
//   await browser.close();
// })();

// *****************************



const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.screenshot({ path: 'example.png' });

const html = await page.evaluate(()=>{
       return{ html: document.documentElement.innerHTML}
            })

console.log(html)

  await browser.close();
})();