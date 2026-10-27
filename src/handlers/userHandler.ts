import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";
import { createUserController,getAllUsersController,userDeleteController,getByUserController,logueoUserController } from "../controllers/userController";
import { User } from "../entities/User";


export const getAllUsers=async (req:Request,res:Response)=>{
    const allUsers:User[]=await getAllUsersController();
    res.status(200).json(allUsers)
};

export const createUser=async (req:Request,res:Response)=>{
    const {name,lastName,email,active,role,passwordHash}=req.body;
    try {
        const {user,token}=await createUserController({name,lastName,email,active,role,passwordHash});
         res.status(200).json({user,token});
    } catch (error) {
  return res.status(400).json({
    error: error instanceof Error ? error.message : "Error desconocido"
  });
}
    };
    
export const logueo =async(req:Request,res:Response)=>{
    const {email,password}=req.body;
    
    try {
        const {user,token}=await logueoUserController({email,password});
        res.status(200).json({user,token});
    } catch (error) {
        res.json({
            error: error instanceof Error ? error.message : "Error desconocido"
        })
    }

}
export const getByUser=async (req:Request,res:Response)=>{
    const {id}=req.params;
    try {
        const user:User|null=await getByUserController(Number(id));
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error})
    }
}
export const deleteUser=async (req:Request,res:Response)=>{

    const {id}=req.body;

    await userDeleteController(id)
    res.status(200).json({message:"usuario eliminado"});
};