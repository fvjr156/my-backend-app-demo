import express from "express";
import authRoutes from "./auth.js";
import signLangsRoutes from "./signlangs.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/signs", signLangsRoutes);

router.get("/healthcheck", function (req, res) {
  return res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;
