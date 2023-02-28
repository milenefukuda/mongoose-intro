import { Schema, model } from "mongoose";

const utensilioSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String },
  isActive: { type: Boolean },
  descriçao: { type: String, maxlength: 200 },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

export const UtensilioModel = model("Utensilio", utensilioSchema);
