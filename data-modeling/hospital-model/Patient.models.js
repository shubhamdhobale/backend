import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  address : {
    type: String,
    required: true
  },
  diagnosedWith: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["M" , "F" , "O"],
    required: true
  },
  booldGroup: {
    type: String,
    required: true
  },
  admittedIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  }
} , {timestamps: true})


export const Patient = mongoose.model("Patient" ,patientSchema)