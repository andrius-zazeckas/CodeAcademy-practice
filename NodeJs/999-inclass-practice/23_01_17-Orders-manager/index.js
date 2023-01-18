import express from "express";
import dotenv from "dotenv";
import { orderController } from "./src/controllers/ordersController.js";

dotenv.config();

const PORT = +process.env.serverPort || 5_000;

const app = express();

app.use(express.json());

app.use("/orders", orderController);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
