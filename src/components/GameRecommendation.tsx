import React from 'react';
import { Card } from 'antd';

interface GameRecommendation {
  name: string;
  description: string;
}

const GameRecommendation: React.FC<{ recommendations: GameRecommendation[] }> = ({
  recommendations,
}) => {
  return (
    <>
      {/* {recommendations.map((game, index) => (
        <Card key={index} title={game.name}>
          <p>{game.description}</p>
        </Card>
      ))} */}
      <p>placeholder hehe, you may put your recommendation here</p>
    </>
  );
};

export default GameRecommendation;
