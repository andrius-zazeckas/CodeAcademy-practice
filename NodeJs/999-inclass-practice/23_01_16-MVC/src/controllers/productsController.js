import { Router } from "express";
import { getProducts } from "../services/productsServices.js";

const router = Router();

router.get("/", getProducts);

// router.post("/", postProducts);

export default router;
