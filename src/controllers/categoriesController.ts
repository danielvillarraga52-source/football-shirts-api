import { categoryModel } from "../config/data-source";
import { Category } from "../entities/Category";
import CategoryDto from "../interfaces/CategoryDto";

export const allCategoriesController=async():Promise<Category[]>=>{

  const categories=await categoryModel.find();
  if(categories.length===0){
    throw Error("No hay categorias registradas");
  }return categories;
}

export const createCategoryController = async (
  categoryData: CategoryDto
): Promise<Category> => {

  const categoryExist = await categoryModel.findOne({
    where: [
      { name: categoryData.name },
      { slug: categoryData.slug }
    ]
  });

  if (categoryExist) {
    throw new Error("Categoria ya existente");
  }

  const newCategory = categoryModel.create(categoryData);

  return await categoryModel.save(newCategory);
};
export const editCategorieController=async(id:number,categoryData:CategoryDto)=>{

  const editCategory= await categoryModel.findOneBy({id});
  if(!editCategory){
     throw Error("No existe esta categoria");
  }const updateCategory=categoryModel.merge(editCategory,categoryData);
  const results = await categoryModel.save(updateCategory);
  return results;
}

export const deleteCategorieController=async(id:number)=>{
  const deleteCategory = await categoryModel.findOneBy({id});
    if(!deleteCategory){
      throw new Error("No existe esta categoria")
    }const results=await categoryModel.delete(id);
    return results;
}