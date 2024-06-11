import NoteList from "./NoteList";

const NoteClient = () => {
  const url = import.meta.env.VITE_API_URL + "/note";

  return (
    <>
      <p>Notes</p>
      <p>server: "{url}"</p>
      <NoteList url={url} />
    </>
  );
};

export default NoteClient;
