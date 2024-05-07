// import mongoose from 'mongoose'
// import DB_NAME from './constant'
import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
  path: './.env',
})

const app = express();

connectDB()
.then(app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port: ${process.env.PORT}`)
}))
.catch((err => {
  console.log("MonogoDB connection failed ", err);
}))



/*
            //-r dotenv/config --experimental-json-modules

DB Connection Approach 1
;( async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)        //DB connection string
    app.on("error" , (error) => {                      //If our express app is unable to talk to mongoDB then app.on() handles the error
      console.log(error);
      throw error;
    })

    app.listen(process.env.PORT , () => {
      console.log(`App is listning on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
})()         //IFFE function 
*/