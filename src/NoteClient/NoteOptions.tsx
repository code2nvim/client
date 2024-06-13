import { useState } from "react";
import { handleChangeNote, handleDeleteNote } from "./fetchData";
import Note from "./Note";

type NoteOptionsProps = {
  note: Note;
};

const NoteOptions = ({ note }: NoteOptionsProps) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  const contentEdit = (editing: boolean) => {
    if (editing) {
      return (
        <>
          <input
            value={content}
            onChange={(input) => {
              setContent(input.target.value);
            }}
          />
          <button
            onClick={() => {
              setEditing(false);
              handleChangeNote({
                ...note,
                content,
              });
            }}
          >
            save
          </button>
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
        checked={note.doing}
        onChange={(doing) => {
          handleChangeNote({
            ...note,
            doing: doing.target.checked,
          });
        }}
      />
      {contentEdit(editing)}
      <button onClick={() => handleDeleteNote(note.id)}>delete</button>
    </label>
  );
};

export default NoteOptions;
