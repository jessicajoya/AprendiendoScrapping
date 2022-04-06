import {Request,Response,NextFunction} from 'express'
import {fetchValues} from '../util/functions'


export function getQuotes(req:Request,res:Response,next:NextFunction){
    console.log(req.params)
    return fetchValues('https://www.ambito.com/contenidos/dolar-informal.html').then((values) =>  res.status(200).send(values));
}

//importar la funcion que me responde