import { userModel } from "../config/data-source";
import { User } from "../entities/User";
import IUser from "../interfaces/IUsers";
import UserDto from "../interfaces/UserDto";
import LoginDto from "../interfaces/LoginDto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { claveJwt } from "../config/envs";

let users:IUser[]=[];

const checkEmailExist=async(email:string)=>{
    const userEmail=await userModel.findOneBy({ email });;
    return userEmail;

}

export const createUserController=async(userData:UserDto):Promise<{ user: User, token: string }>=>{

    const emailExiste = await checkEmailExist(userData.email);
    if(!userData.name || !userData.lastName || !userData.email || !userData.passwordHash){
        throw Error("Faltan datos obligatorios");
    }if(emailExiste){
        throw Error("ya existe usuario con este email");
    }
    const salts = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userData.passwordHash,salts);
    const user =await userModel.create({...userData,passwordHash:hash});
    const result =await userModel.save(user);
    const token =jwt.sign({id:result.id,email:result.email,role:result.role},claveJwt,{expiresIn:"2h"});
    return {user: result,
        token};
   
   
}
export const logueoUserController=async(userData:LoginDto):Promise <{user:User,token:string}>=>{

    
    const user = await checkEmailExist(userData.email)
    console.log("user",user)
    if(!user){
        throw Error("No existe usuario con este email")
    }
    const isMatch = await bcrypt.compare(userData.password,user.passwordHash);
    
    
    if(!isMatch) throw Error("No coincide la contraseña proporcionada");
    const token =jwt.sign({id:user.id,email:user.email,role:user.role},claveJwt,{expiresIn:"2h"});
    return {user,
        token
    }

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
 
    
   