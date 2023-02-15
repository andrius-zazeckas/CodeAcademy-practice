import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddLog } from "../pages/AddLog";
import { AddMed } from "../pages/AddMed";
import { AddPet } from "../pages/AddPet";
import { AddPrescription } from "../pages/AddPrescription";
import { Home } from "../Home";
import { Logs } from "../pages/Logs";
import { Wrapper } from "./styles/Wrapper";
import { Meds } from "../pages/Meds";
import { Header } from "./Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs/:id" element={<Logs />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/add-prescription/:id" element={<AddPrescription />} />
          <Route path="/meds" element={<Meds />} />
          <Route path="/add-med" element={<AddMed />} />
          <Route path="/add-log/:id" element={<AddLog />} />
          <Route path="*" element={<h1>Page does not exist</h1>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
