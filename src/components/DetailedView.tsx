import React from 'react';
import { Card } from 'antd';

interface GameDetails {
  name: string;
  description: string;
  priceChange: { month: string; price: number }[];
  categories: string[];
}

const DetailView: React.FC<{ gameDetails: GameDetails }> = ({ gameDetails }) => {
  return (
    <Card title={gameDetails.name}>
      <p>{gameDetails.description}</p>
      <p>Price Change:</p>
      <ul>
        {gameDetails.priceChange.map((data, index) => (
          <li key={index}>
            {data.month}: {data.price}
          </li>
        ))}
      </ul>
      <p>Categories: {gameDetails.categories.join(', ')}</p>
    </Card>
  );
};

export default DetailView;
