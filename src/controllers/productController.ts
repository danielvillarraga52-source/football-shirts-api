import { productModel,categoryModel } from "../config/data-source";
import { Product } from "../entities/Product";
import ProductDto from "../interfaces/productsDto/ProductDto";
import UpdateProductDto from "../interfaces/productsDto/UpdateProductsDto";


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
};/*  */
export const allProductsController = async():Promise<Product[]>=>{
  const products=await productModel.find({relations:{category:true}});
  return products;
}
export const oneProductController = async(id:number):Promise<Product>=>{

  const product = await productModel.findOne({where:{id},relations:{category:true}});
  if(!product)throw new Error("No existe este producto");
  return product;
}

export const editProductController = async (id:number,productData:UpdateProductDto):Promise<Product>=>{
  const newProduct = await productModel.findOneBy({id});
  if(!newProduct){
    throw new Error("no existe el producto");
  } const updateCategory =  productModel.merge(newProduct,productData);
   const results = await productModel.save(updateCategory);
   return results;
}
export const productDeleteController=async(id:number)=>{
  const productDelete = await productModel.delete(id);
  return productDelete;
}