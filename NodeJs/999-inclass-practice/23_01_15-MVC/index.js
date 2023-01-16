import express from "express";

import productsController from "./src/controllers/productsController.js";

const PORT = 5_000;
const app = express();

app.use(express.json());

app.use("/products", productsController);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
