import React from "react";
import styled from "styled-components";

const Result = styled.div`
  margin-top: 2%;
  margin-bottom: 5%;
  width: 85%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid whitesmoke;
  p {
    width: 100%;
    font-size: 1.1em;
    font-weight: 600;
    text-align: center;
    color: #0b032d;
  }
`;

export default function ResultComponent(props) {
  return (
    <Result>
      <p>Question number {props.order + 1} </p>
      <p>Question: {props.question} </p>
      <p>Your Answer: {props.userPick} </p>
      <p>Correct Answer: {props.correct} </p>
      {props.userPick === props.correct ? <p>1 point </p> : <p>0 points </p>}
    </Result>
  );
}
