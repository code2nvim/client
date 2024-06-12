import { useEffect, useState } from "react";
import Note from "./Note";
import NoteAdd from "./NoteAdd";
import NoteList from "./NoteList";

const NoteClient = () => {
  const url = import.meta.env.VITE_API_URL + "/note";
  const [notes, setNotes] = useState<Note[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Note[]) => setNotes(data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.error(err));
  });

  return (
    <>
      <p>Notes</p>
      <p>
        <button
          onClick={() => {
            setVisible(visible ? false : true);
          }}
        >
          URL:
        </button>
        {visible && url}
      </p>
      <NoteAdd />
      <NoteList notes={notes} />
    </>
  );
};

export default NoteClient;
