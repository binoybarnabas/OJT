"use client";

import { Game } from "@/Models";
import GameCard from "@/components/GameCard";
import { useFetchData } from "@/hooks/UseFetchHook";

const GameDetail = ({ params }: { params: { id: number } }) => {
  
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: params.id },
    headers: {
      "X-RapidAPI-Key": "43040e7cd6msh057a757c8f68c72p149273jsn53c83eada13f",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const data = JSON.stringify(useFetchData(options));
  const gameData : Game = JSON.parse(data)
  console.log(typeof(data));
  console.log(params.id);
  
  return (
    <>
       <GameCard game={gameData} />
      <h1>Hello there</h1>
    </>
  );
};

export default GameDetail;
