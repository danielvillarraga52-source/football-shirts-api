import { Router } from "express";
import { getAllCategories,createCategorie ,updateCategorie,deleteCategorie} from "../handlers/categorieHandler";

const categoriesRouters = Router();


categoriesRouters.get("/",getAllCategories);
categoriesRouters.post("/create",createCategorie);
categoriesRouters.put("/edit/:id",updateCategorie);
categoriesRouters.delete("/delete/:id",deleteCategorie);




export default categoriesRouters;