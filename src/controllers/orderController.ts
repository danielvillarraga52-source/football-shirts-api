import { orderModel, productModel } from "../config/data-source";
import { OrderStatus } from "../entities/Order";
import CreateOrderDto from "../interfaces/orders/CreateOrderDto";

export const orderPostController = async (userId: number, orderData: CreateOrderDto) => {
     console.log("userId:", userId, "| orderData:", orderData);
  // 1. El pedido debe traer productos
  if (!orderData.items || orderData.items.length === 0) {
    throw new Error("El pedido no tiene productos");
  }

  let total = 0;
  const items: { productId: number; quantity: number; unitPrice: number }[] = [];

  // 2. Revisa cada producto contra la base de datos
  for (const item of orderData.items) {
    if (!Number.isInteger(item.quantity) || item.quantity < 1) {
      throw new Error("Cantidad inválida");
    }

    const product = await productModel.findOneBy({ id: item.productId, active: true });
    if (!product) throw new Error(`El producto ${item.productId} no existe`);
    if (product.stock < item.quantity) throw new Error(`Stock insuficiente para ${product.name}`);

    const unitPrice = Number(product.price);   // precio de la BD, no del cliente
    total += unitPrice * item.quantity;
    items.push({ productId: product.id, quantity: item.quantity, unitPrice });
  }

  // 3. Crea la orden con sus ítems y guárdala
  const order = orderModel.create({
    userId,
    totalPrice: total,
    status: OrderStatus.PENDING,
    items,
  });

  return await orderModel.save(order);
};