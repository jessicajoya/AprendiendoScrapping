import express, {NextFunction,Request,Response} from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Aplications listening at http://localhost:3000");
});
