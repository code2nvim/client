import Note from "./Note";
import NoteOptions from "./NoteOptions";

type NoteListProps = {
  notes: Note[];
};

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <>
      {notes.map((note: Note) => (
        <div>
          <NoteOptions note={note} />
        </div>
      ))}
    </>
  );
};

export default NoteList;
