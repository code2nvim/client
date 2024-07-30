import styled from "styled-components";
import { Client } from "../client";
import SideBar from "./SideBar";

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

interface ClientBarsProps {
  client: Client;
  selClient: (client: Client) => void;
}

export const ClientBars = ({ client, selClient }: ClientBarsProps) => {
  return (
    <>
      <Top>
        <Title>{client}</Title>
      </Top>
      <SideBar selClient={selClient} />
    </>
  );
};

export default ClientBars;
