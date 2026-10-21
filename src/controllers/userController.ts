import { userModel } from "../config/data-source";
import { User } from "../entities/User";
import IUser from "../interfaces/IUsers";
import UserDto from "../interfaces/UserDto";

let users:IUser[]=[];



export const createUserController=async(userData:UserDto)=>{

    const user=await userModel.create(userData);
    const result=await userModel.save(user);
    return result
   
}
export const getAllUsersController=async():Promise<User[]>=>{
    const users = await userModel.find()
    return users;
}

export const getByUserController=async(id:number):Promise<User|null>=>{
    const user=await userModel.findOneBy({id})
    if(!user) throw Error("No existe el usuario")
        else return user;
} 

export const userDeleteController = async (id:number):Promise<void>=>{
    users = users.filter((user:IUser)=>{
        return user.id!=id
    })
}
 
    
   