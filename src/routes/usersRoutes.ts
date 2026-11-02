import { Router } from "express";
import { getAllUsers,createUser,deleteUser,getByUser,logueo,profileHandler,updateUserHandler } from "../handlers/userHandler";
import verifyToken from "../middleware/auth";
import { verifyRole } from "../middleware/auth";
const usersRouter=Router();

usersRouter.get("/",verifyToken,verifyRole,getAllUsers);
usersRouter.post("/create",createUser);
usersRouter.post("/login",logueo);
usersRouter.delete("/delete",deleteUser);
usersRouter.get("/profile",verifyToken,profileHandler);
usersRouter.get("/:id",verifyToken,verifyRole,getByUser);
usersRouter.put("/update",updateUserHandler);



export default usersRouter;