import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { RenderUserCard } from "./components/RenderUserCard";
import { RenderUsersList } from "./components/RenderUsersList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>GIT USERS</h1>
      </header>

      <div className="container">
        <RenderUsersList users={users} />
      </div>
    </div>
  );
}

export default App;
