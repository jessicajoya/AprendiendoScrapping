import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import cron from "node-cron";
import { makeDB } from "./util/functions";


const app = express();

app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Aplications listening at http://localhost:3000");
});

cron.schedule('* * * * *',()=>{
  makeDB()
  .then((values) =>  bd=values);
  console.log(bd)
})

export let bd: any = [];


console.log(bd)  

