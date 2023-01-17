import { Product } from "../models/Product.js";

const products = [];

export const createProduct = ({ name, price, isAvailable, imagerUrl }) => {
  try {
    const product = new Product(name, price, isAvailable, imagerUrl);

    products.push(product);
  } catch (error) {
    return console.error(error);
  }
};

export const getProducts = () => {
  return products;
};
