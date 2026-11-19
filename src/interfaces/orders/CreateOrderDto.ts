interface CreateOrderDto {
  items: {
    productId: number;
    quantity: number;
  }[];
}

export default CreateOrderDto;