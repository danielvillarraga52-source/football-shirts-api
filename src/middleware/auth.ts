import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { claveJwt } from "../config/envs";

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
  };

  (req as any).userId = payload.id;

  next();

} catch (error) {

  return res.status(401).json({
    error: "Token inválido"
  });

}
};

export default verifyToken;