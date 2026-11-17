import { Router } from "express";
import { productAllHandlers,productCreateHandler, productOneHandler,productUpdateHandler,productDeleteHandler} from "../handlers/productHandler";
import verifyToken from "../middleware/auth";
import { verifyRole } from "../middleware/auth";
const productsRouters=Router();


productsRouters.get("/",productAllHandlers);
productsRouters.post("/create",verifyToken,verifyRole,productCreateHandler);
productsRouters.get("/:id",productOneHandler);
productsRouters.put("/edit/:id",verifyToken,verifyRole,productUpdateHandler);
productsRouters.delete("/delete/:id",verifyToken,verifyRole,productDeleteHandler); 










export default productsRouters;