import React from "react";
import styled from "styled-components";
import Timer from "./../timer/Timer";

const QuestionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column wrap;
  align-self: center;
`;
const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 75%;
  align-self: center;
  margin-top: 7%;
  margin-bottom: 10%;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;
const OptionButton = styled.button`
  width: 90%;
  height: 55px;
  background: #ffb997;
  color: #74546a;
  font-weight: 800;
  margin: 1%;
  border-radius: 8px;
  border-style: groove;
  border-color: black;
  font-size: 1.1em;
  :hover {
    background-color: white;
    font-size: 1.2em;
    font-weight: 900;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
const QuestionTitle = styled.h2`
  text-align: center;
  margin-top: 12%;
  font-size: 2.2em;
`;

export default function Question(props) {
  // need to combine the right and wrong answers that the API sends back in order to display all the options
  let allOptions = [...props.incorrect, props.correct];

  //we need to shuffle the array so that the correct answer isn't always #4
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const shuffledOptions = shuffle(allOptions);

  return (
    <QuestionContainer>
      <Timer goToNextPage={props.goToNextQuestion} />

      <QuestionTitle>{props.title}</QuestionTitle>
      <OptionsContainer>
        {shuffledOptions.map((option, index) => (
          <OptionButton key={`question${index}`} onClick={props.handleChoice}>
            {option}
          </OptionButton>
        ))}
      </OptionsContainer>
    </QuestionContainer>
  );
}
