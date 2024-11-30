import { Router } from "express";

const router = Router();

router.get("/post", (req, res) => {
  res.status(200).json({ message: "Get all posts" });
});

router.get("/post/:id", (req, res) => {
  res.status(200).json({ message: "Get post by id" });
});

router.post("/post", (req, res) => {
  res.status(200).json({ message: "Create post" });
});

router.patch("/post/:id", (req, res) => {
  res.status(200).json({ message: "Update post by id" });
});

router.delete("/post/:id", (req, res) => {
  res.status(200).json({ message: "Delete post by id" });
});

export default router;
