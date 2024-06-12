import { useState } from "react";
import { handleAddNote } from "./fetchData";

const NoteAdd = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <input
        placeholder="add note"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          setContent("");
          handleAddNote(content);
        }}
      >
        add
      </button>
    </>
  );
};

export default NoteAdd;
