import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    category: String,
    items: [{ name: String, price: Number, description: String, status: String }]
  },
  { timestamps: true }
);

export default mongoose.model("Vendor", vendorSchema);
