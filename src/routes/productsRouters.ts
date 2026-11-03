import { Router } from "express";
import { productAllHandlers,productCreateHandler, productOneHandler,productUpdateHandler,productDeleteHandler} from "../handlers/productHandler";
const productsRouters=Router();


productsRouters.get("/",productAllHandlers);
productsRouters.post("/create",productCreateHandler);
productsRouters.get("/:id",productOneHandler);
productsRouters.put("/edit/:id",productUpdateHandler);
productsRouters.delete("/delete/:id",productDeleteHandler); 



export default productsRouters;