import express from "express";
import dotenv from "dotenv";
import { createProduct, getProducts } from "./src/services/productsService.js";

dotenv.config();

const PORT = +process.env.serverPort || 5_000;

const app = express();

app.use(express.json());

console.log(getProducts());

createProduct({
  name: "Audi A4",
  price: 20_000,
  isAvailable: true,
  imagerUrl: "https://jp.lt/wp-content/uploads/2019/05/AudiA4_3.jpg",
});

console.log(getProducts());

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
