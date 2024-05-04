import mongoose from "mongoose";


const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const OrderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orderPrice: {
    type: Number,
    required: true
  },
  orderItems: {
    type: [OrderItemSchema]
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "DELIVERED", "FAILED"],
    default: "PENDING"
  }
}, {timestamps: true})


export const Order = mongoose.model("Order", OrderSchema)