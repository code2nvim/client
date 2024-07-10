import styled from "styled-components";
import { Client } from "./client/client";

const Opts = styled.aside`
  display: grid;
  grid-row: 3;
  top: 3rem;
  position: absolute;
`;

const Opt = styled.button`
  font-size: 1.2rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

interface SideBarProps {
  select: (client: Client) => void;
}

export const SideBar = ({ select }: SideBarProps) => {
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
