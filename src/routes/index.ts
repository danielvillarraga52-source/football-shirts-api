import { Router } from "express";
import usersRouter from "./usersRoutes";
import productsRouters from "./productsRouters";
import categoriesRouters from "./categoriesRouters";
const router: Router = Router();

router.use("/users",usersRouter);
router.use("/products",productsRouters);
router.use("/categories",categoriesRouters);






export default router;