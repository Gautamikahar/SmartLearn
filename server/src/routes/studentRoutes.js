import express from "express";
import {
  getStudentProfile,
} from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/profile",
  protect,
  getStudentProfile
);

export default router;