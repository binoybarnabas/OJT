"use client";
import React, { useContext, useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { AuthContext } from "@/contexts/AuthContext";


const AuthenticationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthenticationScreen;
