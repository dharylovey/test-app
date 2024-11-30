import { OK } from "@/constant/httpStatusCode";
import { RequestHandler } from "express";

export const getAllPosts: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Get all posts" });
};

export const getPostById: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Get post by id" });
};

export const createPost: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Create post" });
};

export const updatePostById: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Update post by id" });
};

export const deletePostById: RequestHandler = async (req, res) => {
  res.status(OK).json({ message: "Delete post by id" });
};
