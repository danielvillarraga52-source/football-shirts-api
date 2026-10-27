import { Router } from "express";
import { getAllUsers,createUser,deleteUser,getByUser,logueo } from "../handlers/userHandler";
import auth from "../middleware/auth";
const usersRouter=Router();

usersRouter.get("/",getAllUsers);
usersRouter.get("/:id",getByUser)
usersRouter.post("/create",createUser);
usersRouter.post("/login",logueo);
usersRouter.delete("/delete",deleteUser);



export default usersRouter;