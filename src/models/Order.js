import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    paymentInfo: { type: Object },
    status: { type: String, enum: ["pending", "paid", "shipped"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.models.Orders || mongoose.model("Order", OrderSchema);