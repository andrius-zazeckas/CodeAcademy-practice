import { useState } from "react";

export const NoteForm = (props: any) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [areNotesVisible, setAreNotesVisible] = useState(true);

  // state setinimas yra pradinio lygio, nekartoti realiuose projektuose ir nenaudoti "any" tip

  return (
    <>
      {props.children}

      <input value={note} onChange={(event) => setNote(event.target.value)} />

      <input
        checked={areNotesVisible}
        type="checkbox"
        onChange={(event) => setAreNotesVisible(event.target.checked)}
      />

      <button
        onClick={() => {
          setNotes([...notes, note]);
          setNote("");
        }}
      >
        Click
      </button>

      {areNotesVisible && notes.map((curNote, i) => <p key={i}> {curNote}</p>)}
    </>
  );
};
