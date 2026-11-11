import { productModel,categoryModel } from "../config/data-source";
import { Product } from "../entities/Product";
import ProductDto from "../interfaces/productsDto/ProductDto";


export const createProductController = async (
  productData: ProductDto
): Promise<Product> => {

  const category = await categoryModel.findOne({
    where: {
      id: productData.categoryId
    }
  });

  if (!category) {
    throw new Error("La categoría no existe");
  }

  const nuevo = productModel.create({
    name: productData.name,
    price: productData.price,
    stock: productData.stock,
    category
  });

  if (productData.description) {
    nuevo.description = productData.description;
  }

  if (productData.imageUrl) {
    nuevo.imageUrl = productData.imageUrl;
  }

  return await productModel.save(nuevo);
};