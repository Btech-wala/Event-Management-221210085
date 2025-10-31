import express from "express";
import { getMemberships, addMembership } from "../controllers/membershipController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all membership plans
router.get("/", getMemberships);

// POST add a new plan (admin only)
router.post("/", protect, adminOnly, addMembership);

export default router;
