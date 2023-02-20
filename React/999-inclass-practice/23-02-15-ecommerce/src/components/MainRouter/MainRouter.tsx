import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../../pages/Cart";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Products } from "../Products/Products";

export const MainRouter = () => {
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
