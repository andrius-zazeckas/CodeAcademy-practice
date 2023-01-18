import { Order } from "../models/Order.js";

const orders = [];

export const createOrder = ({
  id,
  name,
  orderedAt,
  completedAt,
  products,
  totalPrice,
}) => {
  try {
    const order = new Order({
      id,
      name,
      orderedAt,
      completedAt,
      products,
      totalPrice,
    });

    if (order) {
      orders.push(order);

      return { order };
    }
  } catch (error) {
    // console.error(error);

    return { error };
  }
};

export const getOrders = () => {
  return orders;
};
