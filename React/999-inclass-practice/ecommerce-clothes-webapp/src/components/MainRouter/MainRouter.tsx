import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, NotFoundPage, Products } from "..";
import { Header } from "../Header/Header";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
