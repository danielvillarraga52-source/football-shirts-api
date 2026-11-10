import { Router } from "express";
import { getAllCategories,createCategorie ,updateCategorie,deleteCategorie} from "../handlers/categorieHandler";
import verifyToken from "../middleware/auth";
import { verifyRole } from "../middleware/auth";

const categoriesRouters = Router();


categoriesRouters.get("/",getAllCategories);
categoriesRouters.post("/create",verifyToken,verifyRole,createCategorie);
categoriesRouters.put("/edit/:id",verifyToken,verifyRole,updateCategorie);
categoriesRouters.delete("/delete/:id",verifyToken,verifyRole,deleteCategorie);




export default categoriesRouters;