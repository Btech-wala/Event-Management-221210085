import express from "express";
import { getVendors, addItem } from "../controllers/vendorController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getVendors);
router.post("/add-item", protect, addItem);

export default router;
