import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Hero } from "./components/Hero/Hero";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header
        title="Title"
        one="Some about text"
        two="in two lines"
        header="header-wrapper"
      >
        {" "}
        <Button />
      </Header>

      {/* <Hero title="Info hero" subtitle="Info subtitle" color="blue" /> */}
    </div>
  );
}

export default App;
