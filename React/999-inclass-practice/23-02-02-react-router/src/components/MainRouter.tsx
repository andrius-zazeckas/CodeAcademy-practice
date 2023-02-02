import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { VisitCount } from "./VisitCount";

export const MainRouter = (props: any) => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/asdasd">Klaida</Link>
      </header>

      {props.children}
      <VisitCount />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Puslapis nerastas</p>} />
      </Routes>
    </BrowserRouter>
  );
};
