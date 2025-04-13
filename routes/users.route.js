import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/users.controller.js";


const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("/", createUser);

userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);


export default userRoutes;