import styled from "styled-components";
import { Client } from "./types/client";

const Toggle = styled.button`
  font-size: 1.2rem;
  top: 1rem;
  left: 1rem;
  position: absolute;
`;

const Menu = styled.aside`
  display: grid;
  grid-row: 3;
  position: absolute;
`;

const ClientOpt = styled.button`
  font-size: 1.2rem;
`;

interface SideBarProps {
  select: (client: Client) => void;
}

export const SideBar = ({ select }: SideBarProps) => {
  return (
    <>
      <Toggle>MENU</Toggle>
      <Menu>
        <ClientOpt onClick={() => select("TODO")}>Chat</ClientOpt>
        <ClientOpt onClick={() => select("Notes")}>Notes</ClientOpt>
        <ClientOpt onClick={() => select("Links")}>Links</ClientOpt>
      </Menu>
    </>
  );
};

export default SideBar;
