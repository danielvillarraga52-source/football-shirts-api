import { Request,Response } from "express";
import { orderPostController,allOrders,orderOne } from "../controllers/orderController";
import { Order } from "../entities/Order";



export const getAllOrderHandler=async(req:Request,res:Response)=>{
    try {
      const orders:Order[] = await allOrders();
      res.status(200).json(orders); 
    } catch (error) {
      res.status(400).json({
        error:error instanceof Error
        ?error.message
        :"Error desconocido"
      })
    }
};
export const getOrderHandler=async(req:Request,res:Response)=>{
    try {
      const {id}=req.params;
      const userId = (req as any).userId;
      const cambio=Number(id)
      const order = await orderOne(userId,cambio);
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({
        error:error instanceof Error
        ?error.message
        :"Error desconocido" 
      })
    }
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

/* 
router.post("/");
router.get("/");
router.get("/:id");
router.patch("/:id/status");
router.post("/:id/checkout"); */