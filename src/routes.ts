import { Express } from "express";
import {
  getQuotes,
  getAverage,
  getSlippage,
} from "./controllers/quotes.controller";

function routes(app: Express) {
  app.get("/quotes", getQuotes);
  app.get("/average", getAverage);
  app.get("/slippage", getSlippage);
}

export default routes;
