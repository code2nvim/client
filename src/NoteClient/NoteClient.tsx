import { useEffect, useState } from "react";
import styled from "styled-components";
import { Note } from "./note/note";

const Page = styled.main`
  background: #333;
`;

const Url = styled.p`
  color: white;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Show = styled.button`
  color: black;
`;

const NoteClient = () => {
  const url = import.meta.env.VITE_API_URL + "/note";
  const [visible, setVisible] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Note[]) => setNotes(data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.error(err));
  });

  return (
    <Page>
      <Url>
        <Show
          onClick={() => {
            setVisible(visible ? false : true);
          }}
        >
          Server:
        </Show>
        {visible && url}
      </Url>
      {notes.map((note) => (
        <label key={note.id}>{note.content}</label>
      ))}
    </Page>
  );
};

export default NoteClient;
