import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Game } from '@/Models';

interface GameProp{
game:Game
}

const GameCard: React.FC<GameProp>= ({ game }) => {

  const { title, thumbnail, short_description, genre, platform, publisher, developer, release_date } = game;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70vh',width:'50vh',padding:'2rem' }}>
      <CardMedia
        component="img"
        height="200"
        image={thumbnail}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {short_description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Platform: {platform}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Publisher: {publisher}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Developer: {developer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release Date: {release_date}
        </Typography>
      </CardContent>
      <div style={{ flexGrow: 1 }} />
    </Card>
  );
}

export default GameCard;
