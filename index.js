import express from "express";
import * as dotenv from "dotenv";

import { connectToDB } from "./config/db.config.js";
import { emprestimoRouter } from "./routes/emprestimo.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { utensilioRouter } from "./routes/utensilio.routes.js";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/emprestimo", emprestimoRouter); // tudo que chegar na API será redirecionado pelo Router
app.use("/user", userRouter);
app.use("/utensilio", utensilioRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
