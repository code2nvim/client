import { useState } from "react";
import { handleChangeNote, handleDeleteNote } from "./fetchData";
import Note from "./Note";

type NoteOptionsProps = {
  note: Note;
};

const NoteOptions = ({ note }: NoteOptionsProps) => {
  const [editing, setEditing] = useState(false);

  const contentEdit = (editing: boolean) => {
    if (editing) {
      return (
        <>
          <input
            value={note.content}
            onChange={(input) => {
              handleChangeNote({
                ...note,
                content: input.target.value,
              });
            }}
          />
          <button onClick={() => setEditing(false)}>save</button>
        </>
      );
    } else {
      return (
        <>
          {note.content}
          <button onClick={() => setEditing(true)}>edit</button>
        </>
      );
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={note.processing}
        onChange={(processing) => {
          handleChangeNote({
            ...note,
            processing: processing.target.checked,
          });
        }}
      />
      {contentEdit(editing)}
      <button onClick={() => handleDeleteNote(note.id)}>delete</button>
    </label>
  );
};

export default NoteOptions;
