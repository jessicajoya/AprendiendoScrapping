import { Application, Request, Response } from "express";
import { fetchValues } from "../services/quotesService";

import CoursesData from "../../data/courses.json";

export const loadApiEndpoints = async (app: Application): Promise<void> => {
  app.get("/quotes", (req: Request, res: Response) => {
    return fetchValues('https://www.ambito.com/contenidos/dolar-informal.html').then((values) =>  res.status(200).send(values));
    //return fetchValues(req.url).then((values) =>  res.status(200).send(values));
    //console.log("debuggeando ando");
    //return res.status(200).send(fetchValues('https://www.ambito.com/contenidos/dolar-informal.html').then(values));
   
  });
};

