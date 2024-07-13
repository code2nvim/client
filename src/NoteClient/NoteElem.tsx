import styled from "styled-components";
import { Note } from "./note/note";

const Item = styled.p`
  background: black;
  border-radius: 0.5rem;
  text-align: left;
  padding: 1rem;
  margin: 0.5rem;
`;

interface NoteItemProps {
  note: Note;
}

export const NoteElem = ({ note }: NoteItemProps) => {
  return <Item>{note.content}</Item>;
};

export default NoteElem;
