import "./App.css";
import { PostProduct } from "./components/PostProduct";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Barbora</h1>
      </header>
      <Products />

      <PostProduct />
    </div>
  );
}

export default App;
