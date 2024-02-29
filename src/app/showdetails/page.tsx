'use client'
import UserInfoCard from "@/components/UserInfoCard";
import { FormProviderContext } from "@/contexts/FormContext";
import { Container, Typography } from "@mui/material";
import { useContext } from "react";

const ShowDetails = () => {
  const {userData} = useContext(FormProviderContext);
  // console.log(userData)
  return (
    <Container sx={{ height: "100vh", marginTop:'4rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Show details
      </Typography>
      { 
      userData.map((data, index) => (
        <UserInfoCard key={index} userData={data}/>  
        ))
      } 
    </Container>
  );
};

export default ShowDetails;
