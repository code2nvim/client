import { useState } from "react";
import Note from "./Note";

type NoteOptsProps = {
  note: Note;
};

const NoteOpts = ({ note }: NoteOptsProps) => {
  const [editing, setEditing] = useState(false);

  const onChange = (note: Note) => {
    // TODO
    console.log("chang note " + note.id);
  };

  const onDelete = (id: number) => {
    // TODO
    console.log("delete note: " + id);
  };

  const noteEdit = (editing: boolean) => {
    if (editing) {
      return (
        <>
          <input
            value={note.content}
            onChange={(input) => {
              onChange({
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
          onChange({
            ...note,
            processing: processing.target.checked,
          });
        }}
      />
      {noteEdit(editing)}
      <button onClick={() => onDelete(note.id)}>delete</button>
    </label>
  );
};

export default NoteOpts;
