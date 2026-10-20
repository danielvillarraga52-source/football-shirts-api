import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";
import { createUserController } from "../controllers/userController";

export const getAllUsers=async (req:Request,res:Response)=>{
    res.send("hola")
};

export const createUser=async (req:Request,res:Response)=>{
    const {name,
    secondName,
    lastName,
    secondLastName,
    email,
    country,
    address,
    active,
role}=req.body;
    const newUser:IUser=await createUserController({name,
    secondName,
    lastName,
    secondLastName,
    email,
    country,
    address,
    active,
    role});
    res.status(200).json(newUser);
};
export const deleteUser=async (req:Request,res:Response)=>{
    res.send("volvi")
};