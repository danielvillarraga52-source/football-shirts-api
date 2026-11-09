import { Request, Response } from "express";
import { createUserController,getAllUsersController,userDeleteController,getByUserController,logueoUserController,profileController,updateUserController } from "../controllers/userController";
import { User } from "../entities/User";


export const getAllUsers=async (req:Request,res:Response)=>{
    try {
        
        const allUsers:User[]=await getAllUsersController();
        res.status(200).json(allUsers)
    } catch (error) {
        return res.status(400).json({
    error: error instanceof Error ? error.message : "Error desconocido"
  });
    }
};

export const createUser=async (req:Request,res:Response)=>{
    const {name,lastName,email,passwordHash}=req.body;
    try {
        const {user,token}=await createUserController({name,lastName,email,passwordHash});
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
export const profileHandler =async(req:Request,res:Response)=>{

    try {
        
        const userId = (req as any).userId;

    const user = await profileController(userId);

    res.status(200).json(user); 
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
export const updateUserHandler = async(req:Request,res:Response)=>{
    const {name,email,passwordHash}=req.body;
    const {id}=req.params;
    try {
        const userChange=await updateUserController(Number(id),{name,email,passwordHash});
        res.status(200).json(userChange);
    } catch (error) {
        res.json({
            error: error instanceof Error ? error.message : "Error desconocido"
        })
    }
}
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userDeleteController(Number(id));

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      error:
        error instanceof Error
          ? error.message
          : "Error desconocido",
    });
  }
};