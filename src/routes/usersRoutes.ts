import { Router } from "express";
import { getAllUsers,createUser,deleteUser,getByUser,logueo,profileHandler,updateUserHandler } from "../handlers/userHandler";
import verifyToken from "../middleware/auth";
import { verifyRole } from "../middleware/auth";
const usersRouter=Router();

usersRouter.get("/",verifyToken,verifyRole,getAllUsers);
usersRouter.post("/create",createUser);
usersRouter.post("/login",logueo);
usersRouter.get("/profile",verifyToken,profileHandler);
usersRouter.delete("/delete/:id",deleteUser);
usersRouter.get("/:id",verifyToken,verifyRole,getByUser);
usersRouter.put("/update/:id",verifyToken,updateUserHandler);



export default usersRouter;