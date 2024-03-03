import React from 'react';
import { Card } from 'antd';

interface Game {
  name: string;
  description: string;
  releaseDate: string;
  price: number;
  waitTime: number;
}

const Homepage: React.FC<{ games: Game[] }> = ({ games }) => {
  return (
    <>
      {games.map((game, index) => (
        <Card key={index} title={game.name}>
          <p>{game.description}</p>
          <p>Release Date: {game.releaseDate}</p>
          <p>Price: {game.price}</p>
          <p>Wait Time: {game.waitTime} days</p>
        </Card>
      ))}
    </>
  );
};

export default Homepage;
