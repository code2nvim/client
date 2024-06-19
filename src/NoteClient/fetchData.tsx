import Note from "./Note";

const url = import.meta.env.VITE_API_URL + "/note";

export const handleAddNote = (content: string) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: content,
  }).catch((err) => console.error(err));
};

export const handleChangeNote = (note: Note) => {
  const id = note.id;
  fetch(url + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  }).catch((err) => console.error(err));
};

export const handleDeleteNote = (id: number) => {
  const msg = "Delete this message?";
  if (window.confirm(msg))
    fetch(url + "/" + id, {
      method: "DELETE",
    }).catch((err) => console.error(err));
};
