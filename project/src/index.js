// import mongoose from 'mongoose'
import express from 'express';
// import DB_NAME from './constant'
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
  path: './.env',
})

const app = express();

connectDB();



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