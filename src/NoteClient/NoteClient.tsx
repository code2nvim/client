import { useEffect, useState } from "react";
import styled from "styled-components";
import { Note } from "./note/note";
import NoteElem from "./NoteElem";

const Page = styled.main`
  background: #555;
  margin-inline: auto;
  width: 80%;
`;

const Url = styled.p`
  color: white;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
`;

const UrlBtn = styled.button`
  background: black;
  color: white;
  border-radius: 0.3rem;
`;

const UrlAnchor = styled.a`
  color: white;
  padding: 0.2rem;
`;

const Notes = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const NoteClient = () => {
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
        <UrlBtn
          onClick={() => {
            setVisible(visible ? false : true);
          }}
        >
          Server:
        </UrlBtn>
        <UrlAnchor href={url} target="_blank">
          {visible && url}
        </UrlAnchor>
      </Url>
      <Notes>
        {notes.map((note) => (
          <NoteElem key={note.id} note={note} />
        ))}
      </Notes>
    </Page>
  );
};

export default NoteClient;
