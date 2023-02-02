import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Add } from "./Add";
import { Home } from "./Home";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add" element={<Add />} /> */}
        <Route path="*" element={<h1>Page does not exist</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
