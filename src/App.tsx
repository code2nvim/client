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
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin: auto;
`;

const Menu = styled.button`
  left: 0;
  height: 100%;
  border-radius: 10%;
  position: absolute;
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
        <Menu onClick={() => setVisible(visible ? false : true)}>MENU</Menu>
        <Title>{client}</Title>
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
