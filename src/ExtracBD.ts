const axios = require ("axios");
const cheerio = require('cheerio');


const fetchTitles = async () => {
    try {
           const url = 'https://www.ambito.com/contenidos/dolar.html';

     const response = await axios.get(url);
     const {data}= await axios.get(url);
     const $ = cheerio.load(data)

     const titles = [];
   
  
    $('div.first > span').each((_idx, el) => {
          const title = $(el).text()
          titles.push(title)
         });
   
     return titles;
    } catch (error) {
     throw error;
    }
   };
   
   fetchTitles().then((titles) => console.log(titles));
   

