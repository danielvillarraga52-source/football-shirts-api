interface ProductFiltersDto{

  page?: number;
  limit?: number;
  categoryId?: number;
  search?: string;
  minPrice?: number;
  maxPrice?: number;  
};

export default ProductFiltersDto;