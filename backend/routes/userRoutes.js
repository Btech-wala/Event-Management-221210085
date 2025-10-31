import express from "express";
import { getUsers, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all users (admin can use later)
router.get("/", getUsers);

// GET profile (protected)
router.get("/profile", protect, getUserProfile);

export default router;
