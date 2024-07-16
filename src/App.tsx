import { useState } from "react";
import { Client } from "./client/client";
import NoteClient from "./NoteClient/NoteClient";
import ClientBars from "./ClientBars/ClientBars";

export const App = () => {
  const [client, setClient] = useState<Client>("Notes");

  const selClient = (client: Client) => {
    setClient(client);
  };

  return (
    <>
      <ClientBars client={client} selClient={selClient} />
      <>
        {client === "Notes" && <NoteClient />}
        {client === "Links" && "Links"}
        {client === "Files" && "Files"}
      </>
    </>
  );
};

export default App;
