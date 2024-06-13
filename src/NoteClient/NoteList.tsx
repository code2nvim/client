import Note from "./Note";
import NoteOptions from "./NoteOptions";

type NoteListProps = {
  notes: Note[];
};

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <>
      <p>
        {"------------------------------------------"}
        <br />
        <input type="checkbox" checked={true} />
        {"doing..."}
        <input type="checkbox" checked={false} />
        {"maybe next time..."}
        <br />
        {"------------------------------------------"}
      </p>
      {notes.map((note: Note) => (
        <div>
          <NoteOptions note={note} />
        </div>
      ))}
    </>
  );
};

export default NoteList;
