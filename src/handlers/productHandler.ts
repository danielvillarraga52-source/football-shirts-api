import { Request, Response } from "express";
import { createProductController,allProductsController,oneProductController,editProductController,productDeleteController } from "../controllers/productController";
import { Product } from "../entities/Product";

export const productAllHandlers = async(req:Request,res:Response)=>{
    try {
        const allProducts:Product[]=await allProductsController();
        res.status(200).json(allProducts)
    } catch (error) {
        return res.status(400).json({
            error:error instanceof Error
            ?error.message
            :"Error desconocido"
        })
    }
    

};
export const productCreateHandler = async(req:Request,res:Response)=>{
    try {
        const {name,description,price,stock,imageUrl,categoryId}=req.body;
        console.log(req.body)
        const newProduct:Product=await createProductController({name,description,price,stock,imageUrl,categoryId});
        res.status(201).json(newProduct);
    } catch (error) {
        return res.status(400).json({
            error:error instanceof Error
            ?error.message
            :"Error desconocido"

        });
    }
};
export const productOneHandler = async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const oneProduct:Product = await oneProductController(Number(id));
        res.status(200).json(oneProduct)
    } catch (error) {
        return res.status(400).json({
            error:error instanceof Error
            ?error.message
            :"Error desconocido"
        })
    }
};
export const productUpdateHandler = async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const {name,description,price,stock,imageUrl}=req.body;
        const editProduct:Product = await editProductController(Number(id),{name,description,price,stock,imageUrl});
        res.status(200).json(editProduct);
    } catch (error) {
        return res.status(400).json({
            error:error instanceof Error
            ?error.message
            :"Error desconocido"
        })
    }
};
export const productDeleteHandler = async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const deleteProduct= await productDeleteController(Number(id));
        res.status(200).json(deleteProduct); 
    } catch (error) {
        return res.status(400).json({
            error:error instanceof Error
            ?error.message
            :"Error desconocido"
        })
    }
};