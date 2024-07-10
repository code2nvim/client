import { useState } from "react";
import styled from "styled-components";
import { Client } from "./client/client";
import SideBar from "./SideBar";
import NoteClient from "./NoteClient/NoteClient";

const Top = styled.header`
  background: black;
  width: 100%;
  position: static;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 0;
`;

export const App = () => {
  const [client, setClient] = useState<Client>("Chat");
  const [visible, setVisible] = useState(false);

  const select = (client: Client) => {
    setClient(client);
  };

  return (
    <>
      <Top>
        <button onClick={() => setVisible(visible ? false : true)}>MENU</button>
        <Title>{client}</Title>
        <div />
      </Top>
      <>
        {client == "Chat" && "Chat"}
        {client == "Notes" && <NoteClient />}
        {client == "Files" && "Files"}
      </>
      {visible && <SideBar select={select} />}
    </>
  );
};

export default App;
