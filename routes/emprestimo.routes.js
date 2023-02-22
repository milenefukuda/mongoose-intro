import express from "express";
import { EmprestimoModel } from "../models/emprestimo.model.js";

const emprestimoRouter = express.Router();

emprestimoRouter.post("/", async (req, res) => {
  try {
    const newEmprestimo = await EmprestimoModel.create({ ...req.body });

    return res.status(201).json(newEmprestimo);
  } catch (err) {
    console.log(err);
  }
});

export { emprestimoRouter };
