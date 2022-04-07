import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import cron from "node-cron";
import { fetchValues } from "./util/functions";
import { Quote } from "./interfaces/objectQuotes";

const app = express();

app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Aplications listening at http://localhost:3000");
});

// cron.schedule('* * * * *',()=>{
//   fetchValues()
//   .then((values) =>  bd=values);
//   console.log(bd)
// })

export let bd: any = [
  { buy_price: 193, sell_price: 196, source: "https://dolarhoy.com/" },
  { buy_price: 222, sell_price: 456, source: "https://nbbbbb.com/" },
  { buy_price: 333, sell_price: 457, source: "https:/CCCCC.com/" },
];

console.log(bd)

