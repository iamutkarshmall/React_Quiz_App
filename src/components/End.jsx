import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Grid,
    Container,
  } from "@material-ui/core";

const End = () => {
    return (
      <Container>
      <Grid container spacing={4} justify="center">
        <Grid item lg={6}>
          <Box p={3} boxShadow={3} style={{marginTop: '60px'}}>
            <Paper style={{ backgroundColor: "#96BAFF", height: "30vw" }}>
              <Typography variant="h4" align="center" style={{paddingTop: '20px'}}>
                TECHNICAL COMMUNICATION
              </Typography>
              <Typography variant="subtitle1" align="center" style={{paddingTop: '20px'}}>
                Thanks for attending this Quiz
              </Typography>
              <img
                src="https://avatars.githubusercontent.com/u/69422566?v=4"
                style={{
                  width: "10vw",
                  borderRadius: "100%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  border: "solid",
                  marginTop: "30px"
                }}
                alt="my_image"
              ></img>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
    )
}

export default End;
