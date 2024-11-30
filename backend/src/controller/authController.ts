import { OK } from "@/constant/httpStatusCode";
import { RequestHandler } from "express";

export const login: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Login" });
};

export const register: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Register" });
};

export const logout: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Logout" });
};

export const forgotPassword: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Forgot Password" });
};
