import { Schema, model } from "mongoose";

const emprestimoSchema = new Schema({
  utensilio: {
    type: Schema.Types.ObjectId,
    ref: "Utensilio",
    required: true,
  },
  arrendatario: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  arrendador: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // proximidade: { type: Boolean },
  retiradaUtensilio: { type: String },
  devoluçaoUtensilio: { type: String },
  feedbackArrendatario: { type: String, maxlength: 200 },
  feedbackArrendador: { type: String, maxlength: 200 },
});

export const EmprestimoModel = model("Emprestimo", emprestimoSchema);
