import { Router } from "express";
import {
  login,
  register,
  logout,
  forgotPassword,
} from "@/controller/authController";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);

export default router;
