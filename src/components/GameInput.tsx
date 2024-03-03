import React from 'react';
import { Input, Button } from 'antd';

const GameInput: React.FC<{ onSearch: (gameName: string) => void }> = ({ onSearch }) => {
  const [gameName, setGameName] = React.useState('');

  const handleSearch = () => {
    onSearch(gameName);
  };

  return (
    <>
      <Input value={gameName} onChange={(e) => setGameName(e.target.value)} />
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </>
  );
};

export default GameInput;
