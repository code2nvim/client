import styled from "styled-components";
import { Client } from "./client/client";
import { useState } from "react";

const Opts = styled.aside`
  display: flex;
  flex-direction: column;
  top: 3.5rem;
  left: 1%;
  position: absolute;
`;

const Opt = styled.button`
  background: black;
  color: white;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  margin-block: 0.3rem;
  padding-inline: 0.8rem;
`;

const Menu = styled.button`
  color: white;
  aspect-ratio: 1.5 / 1;
  position: absolute;
  top: 0.5rem;
  left: 0.3rem;
  background: black;
  font-weight: bold;
  border-radius: 0.5rem;
`;

const NonMenu = styled.div<{ $visible: boolean }>`
  position: absolute;
  display: ${(props) => (props.$visible ? "black" : "none")};
  top: 0;
  height: 100%;
  width: 100%;
`;

interface SideBarProps {
  selClient: (client: Client) => void;
}

export const SideBar = ({ selClient: select }: SideBarProps) => {
  const [visible, setVisible] = useState(false);

  const handleOnClick = (client: Client) => {
    select(client);
    setVisible(false);
  };

  return (
    <>
      <Menu onClick={() => setVisible(visible ? false : true)}>MENU</Menu>
      <NonMenu $visible={visible} onClick={() => setVisible(false)} />
      {visible && (
        <Opts>
          <Opt onClick={() => handleOnClick("Notes")}>Notes</Opt>
          <Opt onClick={() => handleOnClick("Links")}>Links</Opt>
          <Opt onClick={() => handleOnClick("Files")}>Files</Opt>
        </Opts>
      )}
    </>
  );
};

export default SideBar;
