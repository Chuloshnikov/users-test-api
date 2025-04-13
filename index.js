import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import { connectDB } from "./database/mongodb.js";
import userRoutes from "./routes/users.route.js";

const port = PORT || 8080;
const app = express();

// Настройка CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Разрешаем учетные данные
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Простой маршрут
app.get("/", (req, res) => {
  res.send("Hello server!");
});

// Маршруты API
app.use("/api/v1/users", userRoutes);

// Запуск сервера
app.listen(port, async () => {
  console.log(`Server started on http://localhost:${port}`);
  await connectDB();
});