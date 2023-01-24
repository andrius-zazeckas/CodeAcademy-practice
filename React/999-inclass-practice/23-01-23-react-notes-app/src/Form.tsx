import { useState } from "react";

export const Form = () => {
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSavedNotes((prevSavedNotes) => [...prevSavedNotes, note]);

    setNote("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNote(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "red" }}>
        <input value={note} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {savedNotes.map((curSavedNote, i) => (
        <p key={i}>{curSavedNote}</p>
      ))}

      {/* {savedNotes.map((curSavedNote, i) => {
        return <p key={i}>{curSavedNote}</p>;
      })} */}
    </>
  );
};
