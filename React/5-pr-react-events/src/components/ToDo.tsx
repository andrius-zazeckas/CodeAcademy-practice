import { useState } from "react";

export const ToDo = () => {
  const [toDos, setToDos] = useState<any[]>([]);
  const [toDo, setToDo] = useState("");

  const addToDo = () => {
    const newTodos = [...toDos, toDo];

    setToDos(newTodos);
  };

  const deleteToDo = (i: any) => {
    const newToDos = [...toDos];
    newToDos.splice(i, 1);

    setToDos(newToDos);
  };

  return (
    <div className="container">
      <h3> You have {toDos.length} Todos</h3>
      <input
        placeholder="Enter item"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button onClick={addToDo}>Submit</button>

      {toDos.map((toDo, i) => (
        <div key={i} className="todo">
          <li>{toDo}</li>
          <i onClick={() => deleteToDo(i)} className="fas fa-times-circle"></i>
        </div>
      ))}
    </div>
  );
};
