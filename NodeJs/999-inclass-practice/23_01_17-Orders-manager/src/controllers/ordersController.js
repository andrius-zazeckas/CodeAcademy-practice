import { Router } from "express";
import { createOrder, getOrders } from "../services/ordersService.js";

export const orderController = Router();

orderController.get("/", (_, res) => {
  const orders = getOrders();

  res.send({ orders }).end();
});

orderController.post("/", (req, res) => {
  const { name, orderedAt, completedAt, products, totalPrice } = req.body;

  const { order, error } = createOrder({
    name,
    orderedAt,
    completedAt,
    products,
    totalPrice,
  });

  if (!order || error) {
    return res.status(400).send({ error: error.message }).end();
  }

  res.send({ message: `Order ${name} was created` }).end();
});
