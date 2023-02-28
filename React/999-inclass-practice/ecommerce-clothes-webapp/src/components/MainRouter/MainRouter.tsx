import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Cart, NotFoundPage, Products } from "..";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
