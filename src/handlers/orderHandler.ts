import { Request,Response } from "express";
import { orderPostController } from "../controllers/orderController";



export const getAllOrderHandler=async(req:Request,res:Response)=>{

};
export const getOrderHandler=async(req:Request,res:Response)=>{
    
}
export const postOrderHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).userId;
    const orderNew = await orderPostController(userId,req.body);

    res.status(201).json(orderNew);

  } catch (error) {

    res.status(400).json({
      error:
        error instanceof Error
          ? error.message
          : "Error desconocido",
    });

  }
};
export const updateOrderHandler=async(req:Request,res:Response)=>{
    
}
/* 
router.post("/");
router.get("/");
router.get("/:id");
router.patch("/:id/status");
router.post("/:id/checkout"); */