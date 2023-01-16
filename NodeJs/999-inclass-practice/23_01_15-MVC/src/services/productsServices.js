import { Product } from "../models/Product.js";

const products = [
  new Product(2.99, "book", true),
  new Product(8.99, "table", false),
  new Product(5.99, "pen", true),
];

export const getProducts = (_, res) => {
  res.send({ products }).end();
};
