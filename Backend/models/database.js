import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connect");
  } catch (error) {
    console.log(error);
    console.log("Error connect database");
  }
};

export default dbConnection;
