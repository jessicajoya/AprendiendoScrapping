import {Express} from 'express'
import {getQuotes} from './controllers/quotes.controller'


function routes(app: Express){

    app.get('/quotes',getQuotes)//paso la url
}

export default(routes);