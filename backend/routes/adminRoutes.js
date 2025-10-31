import express from "express";
const router = express.Router();

// Example admin route
router.get("/test", (req, res) => {
  res.send("Admin route working ✅");
});

export default router;
