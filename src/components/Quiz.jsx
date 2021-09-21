import React, { useState, useContext } from "react";
import { QuizContext } from "../helper/Contexts";
import { Questions } from "../helper/QuestionBank";
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Container,
} from "@material-ui/core";

const Quiz = () => {
  const { setQuizState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const nextQuestion = () => {
    setCurrQuestion(currQuestion + 1);
    document.getElementById("a").style.backgroundColor = "#ebebeb";
    document.getElementById("b").style.backgroundColor = "#ebebeb";
    document.getElementById("c").style.backgroundColor = "#ebebeb";
    document.getElementById("d").style.backgroundColor = "#ebebeb";
    
  };
  const finshQuiz = () => {
    setQuizState("end");
  };
  const prevQuestion = () => {
    if (Questions[currQuestion].quesNum !== "1") {
      setCurrQuestion(currQuestion - 1);
    }
  };

  return (
    <Container>
      <Grid container spacing={6} justify="center">
        <Grid item lg={9}>
          <Box p={3} boxShadow={3}>
            <Paper style={{ backgroundColor: "#96BAFF", height: "85vh" }}>
              <Typography variant="h4" align="center" style={{paddingTop: '20px'}}>
                Question No. {Questions[currQuestion].quesNum}
              </Typography>
              <Typography variant="subtitle1" align="center">
                <h3>{Questions[currQuestion].prompt}</h3>
              </Typography>
              <Grid container justify="center">
                <Button
                  id="a"
                  onClick={() => {
                    if ("A" === Questions[currQuestion].ans) {
                      document.getElementById("a").style.backgroundColor =
                        "green";
                    } else
                      document.getElementById("a").style.backgroundColor =
                        "red";
                  }}
                  variant="contained"
                  style={{
                    width: "80%",
                    border: "solid blue",
                    textTransform: 'none'
                  }}
                >
                  <h3>a) {Questions[currQuestion].A}</h3>
                </Button>
                <Button
                  id="b"
                  onClick={() => {
                    if ("B" === Questions[currQuestion].ans) {
                      document.getElementById("b").style.backgroundColor =
                        "green";
                    } else
                      document.getElementById("b").style.backgroundColor =
                        "red";
                  }}
                  variant="contained"
                  style={{
                    width: "80%",
                    border: "solid orange",
                    textTransform: 'none'
                  }}
                >
                  <h3>b) {Questions[currQuestion].B}</h3>
                </Button>
                <Button
                  id="c"
                  onClick={() => {
                    if ("C" === Questions[currQuestion].ans) {
                      document.getElementById("c").style.backgroundColor =
                        "green";
                    } else
                      document.getElementById("c").style.backgroundColor =
                        "red";
                  }}
                  variant="contained"
                  style={{
                    width: "80%",
                    border: "solid purple",
                    textTransform: 'none'
                  }}
                >
                  <h3>c) {Questions[currQuestion].C}</h3>
                </Button>
                <Button
                  id="d"
                  onClick={() => {
                    if ("D" === Questions[currQuestion].ans) {
                      document.getElementById("d").style.backgroundColor =
                        "green";
                    } else
                      document.getElementById("d").style.backgroundColor =
                        "red";
                  }}
                  variant="contained"
                  style={{
                    width: "80%",
                    border: "solid seaGreen",
                    textTransform: 'none'
                  }}
                >
                  <h3>d) {Questions[currQuestion].D}</h3>
                </Button>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {currQuestion === Questions.length - 1 ? (
        <Button onClick={finshQuiz}>Finish Quiz</Button>
      ) : (
        <Button onClick={nextQuestion}>Next</Button>
      )}
      <Button onClick={prevQuestion}>PREV</Button>
    </Container>
  );
};

export default Quiz;
