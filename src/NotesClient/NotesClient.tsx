import { Note } from "./Note";
import { useState } from "react";

export const NotesClient = () => {
  const url = import.meta.env.VITE_API_URL + "/note";
  const [notes, setNotes] = useState<Note[]>([]);

  fetch(url)
    .then((res) => res.json())
    .then((data: Note[]) => setNotes(data.sort((a, b) => a.id - b.id)))
    .catch((err) => console.error(err));

  return (
    <>
      <p> Notes</p>
      <p>server: "{url}"</p>
      {notes.map((note) => (
        <div key={note.id}>
          {note.id}
          {" ... "}
          {note.processing ? "o" : "x"} {note.content}
        </div>
      ))}
    </>
  );
};
