import express from "express";
import * as dotenv from "dotenv";

import { connectToDB } from "./config/db.config.js";
import { emprestimoRouter } from "./routes/emprestimo.routes.js";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/emprestimo", emprestimoRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
