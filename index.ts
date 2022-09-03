import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './src/routes';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  routes(app)
  
});