import styled from "styled-components";
import { Client } from "./client/client";

const Opts = styled.aside`
  display: flex;
  flex-direction: column;
  top: 4rem;
  left: 1%;
  position: absolute;
`;

const Opt = styled.button`
  background: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  margin-block: 0.5rem;
  padding-inline: 0.5rem;
`;

interface SideBarProps {
  selClient: (client: Client) => void;
}

export const SideBar = ({ selClient: select }: SideBarProps) => {
  return (
    <>
      <Opts>
        <Opt onClick={() => select("Chat")}>Chat</Opt>
        <Opt onClick={() => select("Notes")}>Notes</Opt>
        <Opt onClick={() => select("Files")}>Files</Opt>
      </Opts>
    </>
  );
};

export default SideBar;
