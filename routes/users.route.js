import express from "express";


const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("/", createUser);

userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);


export default userRoutes;