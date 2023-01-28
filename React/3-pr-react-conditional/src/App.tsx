import "./App.css";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero title="" subtitle="Info subtitle" color="blue" />
      </header>
    </div>
  );
}

export default App;
