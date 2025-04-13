import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";


const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());           
app.use(express.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.send('Hello server!');
});
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});