import { Router } from "express";
import { getAllOrderHandler,getOrderHandler,postOrderHandler,updateOrderHandler } from "../handlers/orderHandler";
import verifyToken from "../middleware/auth";

const orderRouter = Router();

orderRouter.get("/",verifyToken,getAllOrderHandler);
orderRouter.get("/:id",verifyToken,getOrderHandler);
orderRouter.post("/create",verifyToken,postOrderHandler);






export default orderRouter;