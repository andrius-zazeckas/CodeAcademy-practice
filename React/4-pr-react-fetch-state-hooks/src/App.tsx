import "./App.css";
import { PostProduct } from "./components/PostProduct";
import { PostProductAxios } from "./components/PostProduct-axios-state-obejct";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Barbora</h1>
      </header>
      <Products />

      <PostProduct />

      <p>Axios POST with useState as object:</p>
      <PostProductAxios />
    </div>
  );
}

export default App;
