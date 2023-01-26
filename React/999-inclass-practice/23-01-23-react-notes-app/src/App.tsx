import { useState } from "react";
import "./App.css";
import { RandomNumberGenerator } from "./components/RandomNumberGenerator";
import { Form } from "./Form";
import { NoteForm } from "./NoteForm";

function App() {
  const [i, setI] = useState(0);

  const [description, setDescription] = useState("");

  console.log(i);

  return (
    <>
      <div className="App">
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button onClick={() => setI(i + 1)}>Submit</button>

        <p>i antruoju - {i ** 2}</p>
        <p>{description}</p>

        <div>
          <NoteForm>
            <h1>Notes App</h1>
            <h2>Welcome</h2>
          </NoteForm>

          <p>Random number generator:</p>
          <RandomNumberGenerator />

          {/* <div><Form /></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
