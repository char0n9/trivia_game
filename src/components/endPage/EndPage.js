import React, { useState } from "react";
// import { Container } from "./../startPage/StartPage";
import styled from "styled-components";
import ResultComponent from "./../resultComponent/ResultComponent";

const EndPageContainer = styled.div`
  background: #ffb997;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  width: 100%;
`;

const StyledOption = styled.div`
  height: 200px;
  width: 250px;
  background: ${(props) => (props.right ? "salmon;" : "black;")};
`;
const SummaryContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 75%;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  p {
    font-size: 1.5em;
    margin-top: 5%;
  }
`;
const DetailsBtn = styled.button`
  /* align-self: center; */
  width: 300px;
  position: relative;
  margin-top: 50px;
  height: 30px;
  background: #f67e7d;
  color: #0b032d;
  border: solid 1px #74546a;
  border-radius: 5px;
  :hover {
    background: whitesmoke;
    font-weight: 600;
  }
`;

export default function EndPage(props) {
  const [showDetails, setShowDetails] = useState(false);
  console.log("Props for end page", props);
  let allQuestionsAndAnswers = props.questions.map((item, index) => {
    return {
      question: item.question,
      options: [...item.incorrect_answers, item.correct_answer],
      correct: item.correct_answer,
      answer: props.answers[index],
    };
  });

  let totalRightAnswers = 0;
  allQuestionsAndAnswers.forEach((element) => {
    if (element.answer === element.correct) {
      totalRightAnswers++;
    }
  });
  console.log("All Questions and Answers", allQuestionsAndAnswers);
  return (
    <EndPageContainer>
      {showDetails ? (
        allQuestionsAndAnswers.map((item, index) => (
          <ResultComponent
            order={index}
            question={item.question}
            userPick={item.answer}
            correct={item.correct}
            key={`${index}qus`}
          />
        ))
      ) : (
        <SummaryContainer>
          <p>
            You got {totalRightAnswers} answers right from{" "}
            {allQuestionsAndAnswers.length} questions.{" "}
          </p>
          <DetailsBtn onClick={() => setShowDetails(!showDetails)}>
            View Details
          </DetailsBtn>
        </SummaryContainer>
      )}
    </EndPageContainer>
  );
}
