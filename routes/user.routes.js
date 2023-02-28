import express from "express";
import { UserModel } from "../models/user.model.js";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  try {
    const newUser = await UserModel.create({ ...req.body });

    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

userRouter.get("/userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findOne({ _id: userId });
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

userRouter.put("/userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
  }
});

userRouter.delete("/userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await UserModel.deleteOne({ _id: userId });
    return res.status(200).json(deleted);
  } catch (err) {
    console.log(err);
  }
});

export { userRouter };

// crud do usuário
