import express from "express";
import {
  getAllSignLanguages,
  getSignLanguagesById,
  createSignLanguage,
  updateSignLanguage,
  deleteSignLanguage,
} from "../controllers/signLangsController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authenticate, getAllSignLanguages);
router.get("/:id", authenticate, getSignLanguagesById);
router.post("/", authenticate, createSignLanguage);
router.post("/:id", authenticate, updateSignLanguage);
router.delete("/:id", authenticate, deleteSignLanguage);

export default router;