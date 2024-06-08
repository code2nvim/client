import { useEffect, useState } from "react";
import "./App.css";

type Note = {
  id: number;
  done: boolean;
  content: string;
};

const App = () => {
  const url = import.meta.env.VITE_API_URL + "/note";
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Note[]) => setNotes(data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <p>Notes</p>
      <p>server: "{url}"</p>
      {notes.map((note) => (
        <div key={note.id}>
          {note.id}
          {" ... "}
          {note.done ? "o" : "x"} {note.content}
        </div>
      ))}
    </>
  );
};

export default App;
