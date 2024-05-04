import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Doctor', 
    required: true 
  },
  disease: [
    {
      type: String
    }
  ]
} , {timestamps: true})


export const MedicalRecord = mongoose.model("MedicalRecord" ,medicalRecordSchema)