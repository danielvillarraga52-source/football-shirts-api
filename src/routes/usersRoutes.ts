import { Router } from "express";
import { getAllUsers,createUser,deleteUser,getByUser,logueo,profileHandler } from "../handlers/userHandler";
import verifyToken from "../middleware/auth";
const usersRouter=Router();

usersRouter.get("/",getAllUsers);
usersRouter.post("/create",createUser);
usersRouter.post("/login",logueo);
usersRouter.delete("/delete",deleteUser);
usersRouter.get("/profile",verifyToken,profileHandler);
usersRouter.get("/:id",getByUser)



export default usersRouter;