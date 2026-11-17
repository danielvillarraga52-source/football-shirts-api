import { Router } from "express";
import { getAllFavorites,createFavoriteController,deleteFavoriteHandler } from "../handlers/favoritesHandlers";
import verifyToken from "../middleware/auth";
const favoritesRouter = Router();

favoritesRouter.get("/",verifyToken,getAllFavorites);
favoritesRouter.post("/create/:productId",verifyToken,createFavoriteController);
favoritesRouter.delete("/delete/:productId",verifyToken,deleteFavoriteHandler);



export default favoritesRouter;