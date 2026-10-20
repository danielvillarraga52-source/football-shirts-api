import { Router } from "express";
import { getAllUsers,createUser,deleteUser } from "../handlers/userHandler";
const usersRouter=Router();

usersRouter.get("/",getAllUsers);
usersRouter.post("/create",createUser);
usersRouter.delete("/delete",deleteUser);



export default usersRouter;