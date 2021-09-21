import React, { useContext } from "react";
import { QuizContext } from "../helper/Contexts";
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import '../App.css'

const MainMenu = () => {
  const { quizState, setQuizState } = useContext(QuizContext);
  return (
    <Container>
      <Grid container spacing={4} justify="center">
        <Grid item lg={6}>
          <Box p={3} boxShadow={3} style={{ marginTop: "60px" }}>
            <Paper style={{ backgroundColor: "#96BAFF", height: "30vw" }}>
              <Typography
                variant="h4"
                align="center"
                style={{ paddingTop: "20px" }}
              >
                TECHNICAL COMMUNICATION
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ marginTop: "-10px" }}
              >
                <h4>Welcome to the Quiz</h4>
              </Typography>
              <div className="flip-card" style={{margin: 'auto'}}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://avatars.githubusercontent.com/u/69422566?v=4"
                      style={{
                        width: "10vw",
                        borderRadius: "100%"
                      }}
                      alt="my_image"
                    ></img>
                  </div>
                  <div className="flip-card-back">
                    <h1>Utkarsh Mall</h1>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  onClick={() => {
                    setQuizState("quiz");
                  }}
                  variant="contained"
                  color="primary"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "60px",
                    minWidth: "200px",
                    minHeight: "60px",
                    marginTop: "13vw"
                  }}
                >
                  Start Quiz
                </Button>
              </div>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainMenu;
