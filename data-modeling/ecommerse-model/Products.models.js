import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  description: {
    type: String,
    required: true
  },
  name : {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productImage: {
    type: String
  }
}, {timestamps: true})

export const Product = mongoose.model("Product", ProductSchema)