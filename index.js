import express from "express";

import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";

import { connectDB } from "./database/mongodb.js";
import userRoutes from "./routes/users.route.js";


const port = PORT || 8080;
const app = express();

app.use(express.json());           
app.use(express.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.send('Hello server!');
});
app.use(cookieParser());


//Routes
app.use("/api/v1/users", userRoutes);

app.listen(port, async () => {
    console.log(`Server started on http://localhost:${port}`);
    await connectDB();
});