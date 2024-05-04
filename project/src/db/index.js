import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    console.log(`DB Connected ${ConnectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection failed" , error);
    process.exit(1);
  }
}

export default connectDB;