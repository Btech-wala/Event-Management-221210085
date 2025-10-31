import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  user: String,
  vendor: String,
  amount: Number,
  date: String
});

export default mongoose.model("Transaction", transactionSchema);
