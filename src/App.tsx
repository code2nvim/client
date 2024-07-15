import { useState } from "react";
import styled from "styled-components";
import { Client } from "./client/client";
import MenuBar from "./MenuBar";
import NoteClient from "./NoteClient/NoteClient";

const Top = styled.header`
  background: black;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
`;

export const App = () => {
  const [client, setClient] = useState<Client>("Notes");

  const selClient = (client: Client) => {
    setClient(client);
  };

  return (
    <>
      <Top>
        <Title>{client}</Title>
      </Top>
      <>
        {client === "Notes" && <NoteClient />}
        {client === "Links" && "Links"}
        {client === "Files" && "Files"}
      </>
      <MenuBar selClient={selClient} />
    </>
  );
};

export default App;
