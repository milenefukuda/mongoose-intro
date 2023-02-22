import { Schema, model } from "mongoose";

const emprestimoSchema = new Schema({
  utensilio: { type: String, required: true },
  apelo: { type: String, maxlength: 200 },
  endereço: { type: String, required: true },
  proximidade: { type: Boolean },
  devoluçao: { type: String, required: true },
});

export const EmprestimoModel = model("Emprestimo", emprestimoSchema);
