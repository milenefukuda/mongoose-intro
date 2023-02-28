// é por aqui que as requisições chegam ao computador

import express from "express";
import { EmprestimoModel } from "../models/emprestimo.model.js";
import { UserModel } from "../models/user.model.js";

const emprestimoRouter = express.Router();

emprestimoRouter.post(
  "/:arrendatarioId/:arrendadorId/:utensilioId",
  async (req, res) => {
    try {
      const { arrendatarioId, arrendadorId, utensilioId } = req.params;

      // if (!req.headers.authorization) {
      //   return res.status(401).json("Não autorizado");
      // }

      const newEmprestimo = await EmprestimoModel.create({
        ...req.body,
        arrendatarioUser: arrendatarioId,
        arrendadorUser: arrendadorId,
        utensilio: utensilioId,
      });

      return res.status(201).json(newEmprestimo);
    } catch (err) {
      console.log(err);
      // checking validation
      if (error.name === "ValidationError") {
        const message = Object.values(error.errors).map(
          (value) => value.message
        );
        return res.status(400).json({ error: message });
      }
      if (error.code === 11000) {
        return res.status(400).json(error.message);
      }
      return res.status(500).json(error.message);
    }
  }
);

emprestimoRouter.get("/", async (req, res) => {
  try {
    const emprestimos = await EmprestimoModel.find();
    return res.status(200).json(emprestimos);
  } catch (err) {
    console.log(err);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({ error: message });
    }
    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }
    return res.status(500).json(error.message);
  }
});

emprestimoRouter.get("/:emprestimoId", async (req, res) => {
  try {
    const { emprestimoId } = req.params;
    const emprestimo = await EmprestimoModel.findOne({ _id: emprestimoId });

    return res.status(200).json(emprestimo);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({ error: message });
    }
    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }
    return res.status(500).json(error.message);
  }
});

emprestimoRouter.put("/:emprestimoId", async (req, res) => {
  try {
    const { emprestimoId } = req.params;

    const updatedEmprestimo = await EmprestimoModel.findOneAndUpdate(
      { _id: emprestimoId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedEmprestimo);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({ error: message });
    }
    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }
    return res.status(500).json(error.message);
  }
});

emprestimoRouter.delete("/:emprestimoId", async (req, res) => {
  try {
    const { emprestimoId } = req.params;

    const deleted = await EmprestimoModel.deleteOne({ _id: emprestimoId });

    return res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({ error: message });
    }
    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }
    return res.status(500).json(error.message);
  }
});

export { emprestimoRouter };
