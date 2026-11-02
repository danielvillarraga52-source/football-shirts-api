import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { claveJwt } from "../config/envs";
import Role from "../interfaces/Enum";

const verifyToken =(req:Request,res:Response,next:NextFunction)=>{
    
    let token= req.headers.authorization;
        
    
    if(!token)  {return res.status(401).json({error:"Token no proporcionado"});
}
    let jwtToken = token.split(" ")[1];
    if (!jwtToken) {
  return res.status(401).json({
    error: "Formato de token inválido"
  });
}

try {

  const payload = jwt.verify(jwtToken, claveJwt) as {
    id: number;
    role:string;
  };

  (req as any).userId = payload.id;
  (req as any).role= payload.role;

  next();

} catch (error) {

  return res.status(401).json({
    error: "Token inválido"
  });

}
};
export const verifyRole=(req:Request,res:Response,next:NextFunction)=>{
  
  const role=(req as any).role;
  if(role===Role.ADMIN){
    console.log(role)
    return next();

  }return res.status(403).json({
    error: "No autorizado"
  });
}

export default verifyToken;