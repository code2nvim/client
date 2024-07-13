import { useState } from "react";
import styled from "styled-components";
import { Client } from "./client/client";
import SideBar from "./SideBar";
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

const Menu = styled.button`
  color: white;
  aspect-ratio: 1.5 / 1;
  position: absolute;
  left: 0.2rem;
  background: black;
  font-weight: bold;
  border-radius: 0.5rem;
`;

export const App = () => {
  const [client, setClient] = useState<Client>("Chat");
  const [visible, setVisible] = useState(false);

  const selClient = (client: Client) => {
    setClient(client);
  };

  return (
    <>
      <Top>
        <Menu onClick={() => setVisible(visible ? false : true)}>MENU</Menu>
        <Title>{client}</Title>
      </Top>
      <>
        {client === "Chat" && "Chat"}
        {client === "Notes" && <NoteClient />}
        {client === "Files" && "Files"}
      </>
      {visible && <SideBar selClient={selClient} />}
    </>
  );
};

export default App;
