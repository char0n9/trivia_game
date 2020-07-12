import React, { Component } from "react";
import StartPage from "./components/startPage/StartPage";
import Quiz from "./components/quiz/Quiz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EndPage from "./components/endPage/EndPage";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/quiz" render={(props) => <Quiz {...props} />} />

        <Route exact path="/">
          <StartPage />
        </Route>
      </Switch>
    );
  }
}
