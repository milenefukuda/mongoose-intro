import express from "express";
import { UtensilioModel } from "../models/utensilio.model.js";

const utensilioRouter = express.Router();

utensilioRouter.post("/utensilioId", async (req, res) => {
  try {
    const { utensilioId } = req.params;

    const newUtensilio = await UtensilioModel.create({
      ...req.body,
      userId,
    });
    return res.status(201).json(newUtensilio);
  } catch (err) {
    console.log(err);
  }
});

utensilioRouter.get("/utensilio", async (req, res) => {
  try {
    const utensilio = await UtensilioModel.find();
    return res.status(200).json(utensilio);
  } catch (err) {
    console.log(err);
  }
});

utensilioRouter.get("/:utensilioId", async (req, res) => {
  try {
    const { utensilioId } = req.params;
    const utensilio = await UtensilioModel.findOne({ _id: utensilioId });
    return res.status(200).json(utensilio);
  } catch (err) {
    console.log(err);
  }
});

utensilioRouter.put("/:utensilioId", async (req, res) => {
  try {
    const { utensilioId } = req.params;
    const updatedUtensilio = await UtensilioModel.findOneAndUpdate(
      { _id: utensilioId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedUtensilio);
  } catch (err) {
    console.log(err);
  }
});

utensilioRouter.delete("/:utensilioId", async (req, res) => {
  try {
    const { utensilioId } = req.params;
    const deleted = await UtensilioModel.deleteOne({ _id: utensilioId });
    return res.status(200).json(deleted);
  } catch (err) {
    console.log(err);
  }
});

export { utensilioRouter };

// crud do utensilio

// const updatedArrendatario = await ArrendatarioModel.findOneAndUpdate(
//   { _id: arrendatarioId },
//   { $push: { utensilios: newEmprestimo._id } },
//   { new: true, runValidators: true }
// );
