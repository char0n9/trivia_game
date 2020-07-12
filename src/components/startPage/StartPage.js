import React, { useState } from "react";
import styled from "styled-components";
import { StyledBtn } from "./../styled-components/all";
import { useHistory } from "react-router-dom";
import { categories } from "./../../categs";
import { difficulty } from "./../../difficulty";
import { nrofquestions } from "./../../nrofquestions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quiz from "./../quiz/Quiz";

// import StarterButton from "./../starterButton/StarterButton";

const StartBtn = styled(StyledBtn)`
  /* align-self: center; */
  width: 300px;
  position: relative;
  margin-top: 50px;
`;

const Select = styled.select`
  width: 80%;
  height: 75px;
  background: white;
  color: gray;
  font-weight: 400;
  font-size: 4em;

  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border-radius: 5px;

  option {
    color: black;
    background: papayawhip;
    font-weight: 400;
    font-size: 1.5em;
    display: flex;
    white-space: pre;
    min-height: 35px;
    padding: 0px 2px 1px;
    border: 1px dotted gray;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: #ffb997;

  width: 100%;
  justify-content: center;
  align-items: center;
`;
const CategContainer = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default function StartPage() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/quiz", {
      category: pickCateg,
      difficulty: pickDifficulty,
      numberOfQuestions: pickNumber,
    });
  };
  const [pickCateg, setPickCateg] = useState("");
  const [pickDifficulty, setPickDifficulty] = useState("");
  const [pickNumber, setPickNumber] = useState(10);

  const handleCategChange = (event) => {
    setPickCateg(event.target.value);
  };
  const handleDifficultyChange = (event) => {
    setPickDifficulty(event.target.value);
  };
  const handleNumberChange = (event) => {
    setPickNumber(event.target.value);
  };

  return (
    <Container>
      <h1>Welcome to the Trivia Game</h1>
      <h2>Pick a category</h2>
      <CategContainer>
        <Select onChange={handleCategChange}>
          {categories.map((e) => (
            <option value={e.id}>{e.name}</option>
          ))}
        </Select>
      </CategContainer>

      <h2>Pick a difficulty level</h2>
      <CategContainer>
        <Select onChange={handleDifficultyChange}>
          {difficulty.map((e) => (
            <option value={e.toLowerCase()}>{e}</option>
          ))}
        </Select>
      </CategContainer>
      <h2>Pick a number of Questions</h2>
      <CategContainer>
        <Select onChange={handleNumberChange}>
          {nrofquestions.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </Select>
      </CategContainer>
      {console.log(pickCateg, pickDifficulty, pickNumber)}
      <StartBtn onClick={handleClick}>START </StartBtn>
    </Container>
  );
}
