import { useEffect, useState } from "react";
import styled from "styled-components";
import { Note } from "./note/note";

const UrlBtn = styled.button`
  color: black;
`;

const Url = styled.a`
  color: white;
`;

const NoteClient = () => {
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
      <UrlBtn onClick={() => {}}>Server:</UrlBtn>
      <Url>{url}</Url>
      <ul>
        {notes.map((note) => (
          <li>
            <label key={note.id}>{note.content}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteClient;
