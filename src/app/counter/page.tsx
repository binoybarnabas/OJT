'use client'
import React, { useContext } from "react";
import { Button,  Grid, Typography } from "@mui/material";
import { CounterContext, CounterProvider } from "@/contexts/CounterContext";
import isAuth from "@/components/Auth";

const useStyles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust as needed
  },
  button: {
    margin: "1rem",
    fontSize: "2rem", // Adjust size as needed
    padding: "1rem", // Adjust padding as needed
  },
};

const Counter = () => {

  const {state,updateCount} = useContext(CounterContext);

  return (
    <Grid container spacing={2} sx={useStyles.root}>
      <Grid item xs={12}>
      <Typography variant="h3" align="center">
            Implemented using useContext() and useReducer()
      </Typography>
        <Typography variant="h2" align="center">
          {state.counterValue}
        </Typography>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={useStyles.button}
        onClick={() => {
            // console.log("printed")
            updateCount('increment')}}
      >
        +
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={useStyles.button}
        onClick={() => {updateCount('decrement')}}
      >
        -
      </Button>

      <Button
        variant="contained"
        color="secondary"
        sx={useStyles.button}
        onClick={() => {updateCount('reset')}}
      >
        Reset
      </Button>
    </Grid>
  );
};

export default isAuth(Counter);
