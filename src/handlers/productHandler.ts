import { Request, Response } from "express";
import { createProductController } from "../controllers/productController";
import { Product } from "../entities/Product";

export const productAllHandlers = async(req:Request,res:Response)=>{
    
    

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

};
export const productUpdateHandler = async(req:Request,res:Response)=>{

};
export const productDeleteHandler = async(req:Request,res:Response)=>{

};