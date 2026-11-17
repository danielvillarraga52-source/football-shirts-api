import { Response,Request} from "express";
import { allFavoritesController,postFavoriteController,deleteFavoriteController } from "../controllers/favoritesControllers";




export const getAllFavorites = async(req:Request,res:Response)=>{
        try {
            const userId = (req as any).userId;
            const allFavorites = await allFavoritesController(userId);
            res.status(200).json(allFavorites);
        } catch (error) {
            return res.status(400).json({
                error:error instanceof Error
                ?error.message
                :"Error desconocido"
            })
        }
};
export const createFavoriteController = async (req: Request, res: Response) => {
  try {
    const productId = Number(req.params.productId);
    const userId = (req as any).userId;

    const favorite = await postFavoriteController(userId, productId);
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};
export const deleteFavoriteHandler=async(req:Request,res:Response)=>{
    try {
        const productId = Number(req.params.productId);
        const userId = (req as any).userId;
        const removeProduct = await deleteFavoriteController(userId,productId) 
        res.status(200).json(removeProduct);
    } catch (error) {
        res.status(400).json({
      error: error instanceof Error ? error.message : "Error desconocido",
    });
    }
}