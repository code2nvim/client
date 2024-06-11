import { useEffect, useState } from "react";
import Note from "./Note";
import NoteOptions from "./NoteOptions";

type NoteListProps = {
  url: string;
};

const NoteList = ({ url }: NoteListProps) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Note[]) => setNotes(data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.error(err));
  });

  return (
    <>
      {notes.map((note: Note) => (
        <div key={note.id}>
          {note.id}
          {" ... "}
          {note.processing ? "⭕️" : "❌"}
          {" ... "}
          {note.content}
          <br />
          <NoteOptions note={note} />
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

export default NoteList;
