import express from "express";
import {
  createService,
  getAllServices,
  editService,
  removeService,
} from "../controller/serviceController";

import { authMiddleware } from "../middleware/authMiddleware";
import { adminMiddleware } from "../middleware/adminMiddleware";

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, createService);
router.put("/:id", authMiddleware, adminMiddleware, editService);
router.delete("/:id", authMiddleware, adminMiddleware, removeService);

router.get("/", getAllServices);

export default router;