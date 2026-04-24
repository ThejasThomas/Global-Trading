import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./presentation/routes/authRoute";
import serviceRoutes from "./presentation/routes/serviceRoute";


dotenv.config();

const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "API is running 🚀" });
});

app.use("/auth", authRoutes);
app.use("/api/services", serviceRoutes);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(
  (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);

    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
);

export default app;