import { useState } from "react";
import axios from "axios";

export const NewStudentForm = () => {
  const [newStudent, setNewStudent] = useState<any[]>([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<null | number>(null);

  console.log({ firstName, lastName, age });

  const handleStudentSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    axios
      .post("http://localhost:5001/create-student", {
        firstName,
        lastName,
        age,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleStudentSubmit}>
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        value={age ?? ""}
        onChange={(event) => setAge(+event.target.value)}
        type="number"
      />
      <button>Add new student</button>
    </form>
  );
};
