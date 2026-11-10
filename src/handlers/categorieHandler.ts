import { Category } from "../entities/Category";
import { createCategoryController,allCategoriesController,editCategorieController,deleteCategorieController } from "../controllers/categoriesController";
import { Response,Request } from "express";


export const getAllCategories = async(req:Request,res:Response)=>{
    try {
        const categories:Category[] = await allCategoriesController();
        res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json({
    error: error instanceof Error
      ? error.message
      : 'Error desconocido'
  });
    }

};

export const createCategorie = async (req:Request,res:Response)=>{
    try {
        const {name,slug}=req.body;
        const categories:Category=await createCategoryController({name,slug});
        res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json({
    error: error instanceof Error
      ? error.message
      : 'Error desconocido'
  });
    }
};
export const updateCategorie = async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const{name,slug}=req.body;
        const editCategorie= await editCategorieController(Number(id),{name,slug});
        res.status(200).json(editCategorie);
    } catch (error) {
        return res.status(400).json({
            error:error instanceof Error
            ?error.message
            :'Error desconocido'
        });
    }

};
export const deleteCategorie = async(req:Request,res:Response)=>{
        const {id}=req.params;
        try {
            const deleteCategory= await deleteCategorieController(Number(id));
            res.status(200).json({deleteCategory,mssg:"Categoria eliminada"}); 
        } catch (error) {
            return res.status(400).json({
                error:error instanceof Error
                ?error.message
                :"Error desconocido"
            })
        }
};