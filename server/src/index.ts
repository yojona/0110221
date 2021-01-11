import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cars from './data/cars';
import cors from 'cors';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({status: 'running'});
});

app.get("/api/cars", (_req: Request, res: Response) => {
  res.json({cars});
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app is running on cors PORT ${PORT}`)
});
