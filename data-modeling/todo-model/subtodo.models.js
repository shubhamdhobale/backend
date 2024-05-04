import mongoose  from "mongoose";

const subtodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
} , {timestamps: true})


export const SubTodo = new mongoose.model( 'SubTodo' , subtodoSchema )

// Add a sub todo to the main Todo Model