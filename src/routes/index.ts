import { Router } from "express";
import usersRouter from "./usersRoutes";
const router: Router = Router();

router.use("/users",usersRouter)






export default router;