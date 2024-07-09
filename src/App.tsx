import { useState } from "react";
import styled from "styled-components";
import { Client } from "./client/client";
import SideBar from "./SideBar";
import NoteClient from "./NoteClient/NoteClient";

const Title = styled.h1`
  font-size: 1.15rem;
`;

export const App = () => {
  const [client, setClient] = useState<Client>("Chat");

  const select = (client: Client) => {
    setClient(client);
  };

  return (
    <>
      <header>
        <Title>{client}</Title>
      </header>
      <SideBar select={select} />
      <main>
        {client == "Chat" && "Chat"}
        {client == "Notes" && <NoteClient />}
        {client == "Links" && "Links"}
      </main>
    </>
  );
};

export default App;
