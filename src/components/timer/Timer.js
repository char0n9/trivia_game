import React, { Component } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  background: #f67e7d;
  width: 75px;
  height: 75px;
  font-size: 1.5em;
  font-weight: 600;
  border: 2px solid #74546a;
  align-self: center;
  text-align: center;
  p {
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 10px;
  }
`;

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { intervalId: "", currentCount: 120 };
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.props.goToNextPage();
      this.setState({ currentCount: 10 });
      this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <TimerContainer>
        <p>{this.state.currentCount}</p>
      </TimerContainer>
    );
  }
}
