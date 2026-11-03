import { Router } from "express";
import usersRouter from "./usersRoutes";
import productsRouters from "./productsRouters";
const router: Router = Router();

router.use("/users",usersRouter);
router.use("/products",productsRouters);






export default router;