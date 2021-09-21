import React, { useState, useContext } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import End from "./components/End";
import { QuizContext } from "./helper/Contexts";
import './App.css';

function App() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div id="container">
      <div id="container-inside">
        <div id="circle-small"></div>
        <div id="circle-medium"></div>
        <div id="circle-large"></div>
        <div id="circle-xlarge"></div>
        <div id="circle-xxlarge"></div>
        <QuizContext.Provider
          value={{ quizState, setQuizState, score, setScore }}
        >
          {quizState === "menu" && <MainMenu />}
          {quizState === "quiz" && <Quiz />}
          {quizState === "end" && <End />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;
