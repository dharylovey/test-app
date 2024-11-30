import express from "express";
import dotenv from "dotenv";
import authRoutes from "@/routes/authRoutes";
import postRoutes from "@/routes/postRoutes";
import { OK } from "@/constant/httpStatusCode";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(OK).json({
    message: "Express + TypeScript Server",
    succces: true,
  });
});

// post routes
app.use("/api", postRoutes);

// auth routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`),
);
