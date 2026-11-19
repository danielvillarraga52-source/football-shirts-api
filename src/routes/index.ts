import { Router } from "express";
import usersRouter from "./usersRoutes";
import productsRouters from "./productsRouters";
import categoriesRouters from "./categoriesRouters";
import favoritesRouter from "./favorites";
import orderRouter from "./order";
const router: Router = Router();

router.use("/users",usersRouter);
router.use("/products",productsRouters);
router.use("/categories",categoriesRouters);
router.use("/favorites",favoritesRouter);
router.use("/order",orderRouter);






export default router;