import mongoose from "mongoose";

const doctorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  worksInHospital: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    }
  ],
  experiance: {
    type: Number,
    required: true,
    default: 0
  }
} , {timestamps: true})


export const Doctor = mongoose.model("Doctor" ,doctorsSchema)