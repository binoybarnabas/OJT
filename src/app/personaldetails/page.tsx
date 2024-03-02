'use client'
import SignupForm from "@/components/Form";
import { Container, Typography } from "@mui/material";
import isAuth from "@/components/Auth";

const PersonalDetails = () => {
  return (
    <Container sx={{ marginTop:'4rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter your personal information
      </Typography>
      <SignupForm />
    </Container>
  );
};

export default isAuth(PersonalDetails);
