import { Request, Response, NextFunction } from "express";

import { bd } from "../app";

export function getQuotes(req: Request, res: Response, next: NextFunction) {
  try {
    return res.status(200).send(bd);
  } catch (error) {
    return res.send("Error");
  }
}

export function getAverage(req: Request, res: Response, next: NextFunction) {
  let sumaBuyPrice = 0;
  let sumaSellPrice = 0;

  for (let value of bd) {
    sumaBuyPrice += value.buy_price;
    sumaSellPrice += value.sell_price;
  }

  let average_buy_price = sumaBuyPrice / bd.length;
  let average_sellprice = sumaSellPrice / bd.length;

  //sacarlo para no repetir codigo

  try {
    return res.status(200).send({
      average_buy_price: average_buy_price,
      average_sellprice: average_sellprice,
    });
  } catch (error) {
    return res.send("Error");
  }
}

export function getSlippage(req: Request, res: Response, next: NextFunction) {
  let arrSlippage: any = [];

  let sumaBuyPrice = 0;
  let sumaSellPrice = 0;

  for (let value of bd) {
    sumaBuyPrice += value.buy_price;
    sumaSellPrice += value.sell_price;
  }

  let average_buy_price = sumaBuyPrice / bd.length;
  let average_sell_price = sumaSellPrice / bd.length;

  for (let value of bd) {
    arrSlippage.push({
      buy_price_slippage: (value.buy_price / average_buy_price).toFixed(1),
      sell_price_slippage: (value.sell_price / average_sell_price).toFixed(),
      source: value.source,
    });
  }

  try {
    return res.status(200).send(arrSlippage);
  } catch (error) {
    return res.send("Error");
  }
}
