import { useEffect, useState } from "react";
import styled from "styled-components";
import { Note } from "./note/note";

const Page = styled.main`
  background: #555;
  margin-inline: auto;
  border-radius: 1rem;
  width: 80%;
`;

const Url = styled.p`
  color: white;
  display: flex;
  justify-content: center;
`;

const Notes = styled.section`
  color: white;
  text-align: center;
`;

const Part = styled.p`
  height: 1rem;
  padding: 0.5rem;
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
        <button
          onClick={() => {
            setVisible(visible ? false : true);
          }}
        >
          Server:
        </button>
        {visible && url}
      </Url>
      <Notes>
        {notes.map((note) => (
          <Part key={note.id}>{note.content}</Part>
        ))}
      </Notes>
    </Page>
  );
};

export default NoteClient;
