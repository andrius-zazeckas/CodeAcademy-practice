import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
