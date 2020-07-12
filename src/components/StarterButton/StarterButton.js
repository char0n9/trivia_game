import React, { useState } from "react";
import styled from "styled-components";

const CategBtn = styled.button`
  height: 25px;
  color: #0b032d;
  background: ${(props) => (props.clicked ? "whitesmoke;" : "#f67e7d")};
  border-radius: 6px;
  padding: 2px;
  font-weight: 400;
  font-size: 1.1em;
  margin-left: 10px;
  margin-top: 10px;
  border: solid 1px #843b62;
  :hover {
    background: whitesmoke;
  }
`;
const [clicked, setClicked] = useState(false);
const clickBtn = () => {
  setClicked(true);
};
export default function StarterButton(props) {
  return <CategBtn clicked={clicked} onClick={clickBtn}></CategBtn>;
}
