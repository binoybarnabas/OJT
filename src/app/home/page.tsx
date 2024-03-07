'use client'
import { Game } from "@/Models";
import GameCard from "@/components/GameCard";
import { useFetchData } from "@/hooks/UseFetchHook";
import { Typography, Container, Box, CircularProgress } from "@mui/material";
import Link from "next/link";
import isAuth from "@/components/Auth";
import { useEffect, useState } from "react";


const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': '72433ecde1msh9a610ec2aa6a227p1ea3a2jsn0adecc675d6c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const Home = () => {
 
  const gameData = useFetchData(options);
  console.log("inside page" + gameData)
  // if(gameData.length === 0){
  //   throw new Error("No fetched data to show")
  // }

  const gameCardContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const gameCardStyle = {
    width: "calc(30% - 20px)", // Adjust the width as needed
    margin: "10px",
    boxSizing: "border-box",
    transition: "transform 0.3s ease", // Add transition property
    "&:hover": {
      transform: "scale(1.05)", // Scale up on hover
    },
  };

  return (
    <Container maxWidth="lg" sx={{ height: "100vh", width: "100%", marginTop:'4rem' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to gaming
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        You can get all the inforamtion about gaming from here..
      </Typography>
      <Container sx={gameCardContainerStyle}>
        <Container sx={gameCardContainerStyle}>
          {gameData &&
            gameData.map((data: Game) => (
              <Container sx={gameCardStyle} key={data.id}>
                <Link href={`/home/${data.id}`}>
                  <GameCard game={data}   />
                </Link>
              </Container>
            ))}
        </Container>
      </Container>
    </Container>
  );
};

export default isAuth(Home);


// {gameData.length === 0 ? (
//   <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
//     <CircularProgress />
//   </Box>
// ) : (
//   <Container sx={gameCardContainerStyle}>
//     {gameData &&
//       gameData.map((data: Game) => (
//         <Container sx={gameCardStyle} key={data.id}>
//           <Link href={`/home/${data.id}`}>
//             <GameCard game={data}   />
//           </Link>
//         </Container>
//       ))}
//   </Container>
// )}