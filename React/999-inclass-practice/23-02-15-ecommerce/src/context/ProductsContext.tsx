import { createContext } from "react";
import { TProducts } from "../types/Tproducts";

export const ProductsContext = createContext<TProducts[]>([]);
