import mongoose from "mongoose";

export async function connectToDB() {
  try {
    mongoose.set("strictQuery", false);
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);

    console.log(dbConnect.connection.name);
    // resultado esperado é "projeto3"
  } catch (err) {
    console.log(err);
  }
}
