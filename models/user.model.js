import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  picture: { type: String },
  endereço: { type: String, required: true },
  utensilios: [{ type: Schema.Types.ObjectId, ref: "Utensilio" }],
  passwordHash: { type: String },
});

export const UserModel = model("User", userSchema);
