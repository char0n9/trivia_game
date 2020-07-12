import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 5%;
  position: fixed;
  width: 100%;
  top: 95%;
  background: #74546a;
  h5 {
    text-align: center;
    position: relative;
    bottom: 5px;
    color: whitesmoke;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <h5>Wild Code School 2020</h5>
    </StyledFooter>
  );
}
