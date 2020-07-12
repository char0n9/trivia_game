import React, { Component } from "react";
import { Container } from "./../startPage/StartPage";
import styled from "styled-components";
import axios from "axios";
import Question from "./../question/Question";
import Footer from "./../footer/Footer";
import { Redirect } from "react-router-dom";
import EndPage from "./../endPage/EndPage";
import Timer from "./../timer/Timer";

const QuizContainer = styled.div`
  background: #f67e7d;
  display: flex;
  flex-flow: column wrap;

  background-color: #ffb997;

  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      activeQuestion: 0,
      questions: [],
      answers: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    //API call
    axios
      .get(
        `https://opentdb.com/api.php?amount=${this.props.location.state.numberOfQuestions}&category=${this.props.location.state.category}&difficulty=${this.props.location.state.difficulty}&type=multiple`
      )
      .then((res) => res.data)

      //storing the data to state
      .then((data) =>
        this.setState({
          questions: data.results.map((e) => {
            e.question = this.escapeSpecialChars(e.question);
            return e;
          }),
        })
      );
  }

  //function for getting rid of funky characters instead of "" and '. There's probably a better method for parsing this response but alas this works

  escapeSpecialChars = (string) => {
    const regexQuote = /&quot;/g;
    const regexApostrophe = /&#039;/g;
    const regexAnd = /&amp;/g;

    string = string
      .replace(regexQuote, '"')
      .replace(regexApostrophe, `'`)
      .replace(regexAnd, `and`);
    return string;
  };

  goToNextQuestion = () => {
    let activeQuestion = this.state.activeQuestion;

    activeQuestion++;
    this.setState({ activeQuestion: activeQuestion });
  };

  handleChoice = (event) => {
    let answers = this.state.answers;

    if (
      event.target.innerText ===
      this.state.questions[this.state.activeQuestion].correct_answer
    ) {
      console.log("Right");
    } else console.log("Wrong");
    event.target.innerText
      ? answers.push(event.target.innerText)
      : answers.push("");
    this.setState({ answers: answers });
    let activeQuestion = this.state.activeQuestion;

    activeQuestion++;
    this.setState({ activeQuestion: activeQuestion });
  };

  render() {
    let displayPage = "";
    if (
      this.state.questions.length > 0 &&
      this.state.activeQuestion < this.state.questions.length
    ) {
      displayPage = (
        <Question
          title={this.state.questions[this.state.activeQuestion].question}
          correct={
            this.state.questions[this.state.activeQuestion].correct_answer
          }
          incorrect={
            this.state.questions[this.state.activeQuestion].incorrect_answers
          }
          handleChoice={this.handleChoice}
          goToNextQuestion={this.goToNextQuestion}
        >
          {" "}
        </Question>
      );
    } else if (
      this.state.questions.length > 0 &&
      this.state.activeQuestion >= this.state.questions.length
    ) {
      displayPage = (
        <EndPage
          questions={this.state.questions}
          answers={this.state.answers}
        />
      );
    } else if (this.state.questions.length == 0) {
      displayPage = <p>Loading...</p>;
    }
    return (
      <QuizContainer className="quizzContainer">
        {displayPage}
        <Footer />
      </QuizContainer>
    );
  }
}
