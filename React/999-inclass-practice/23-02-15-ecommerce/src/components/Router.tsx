import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "../pages/Home";
import { Products } from "./Products";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
