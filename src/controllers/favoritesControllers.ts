import { favoriteModel, productModel } from "../config/data-source"
import { Product } from "../entities/Product";



export const allFavoritesController = async(userId:number)=>{

    const favorites = await favoriteModel.find({
    where: { userId },
    relations: { product: true },
    order: { createdAt: "DESC" },
  });
    
    return favorites; 

};
export const postFavoriteController = async (userId: number, productId: number) => {
  const product = await productModel.findOneBy({ id: productId });
  if (!product) throw new Error("Producto no encontrado");

  const exists = await favoriteModel.findOneBy({ userId, productId });
  if (exists) throw new Error("Ya está en favoritos");

  const favorite = favoriteModel.create({ userId, productId });
  const saved = await favoriteModel.save(favorite);

  return { ...saved, product };   
};
export const deleteFavoriteController = async (userId: number, productId: number) => {
  const favorite = await favoriteModel.findOneBy({ userId, productId });
  if (!favorite) throw new Error("Este producto no está en tus favoritos");

  await favoriteModel.delete({ userId, productId });
  return { productId, isFavorite: false };
};