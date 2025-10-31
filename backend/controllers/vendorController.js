import Vendor from "../models/vendorModel.js";

// Get all vendors
export const getVendors = async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
};

// Add vendor item
export const addItem = async (req, res) => {
  const { vendorId, name, price, description, category } = req.body;
  const vendor = await Vendor.findById(vendorId);
  if (!vendor) return res.status(404).json({ message: "Vendor not found" });

  vendor.items.push({ name, price, description, status: "Pending" });
  await vendor.save();
  res.json(vendor.items);
};
