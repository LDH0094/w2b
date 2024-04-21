import React from "react";
import { Input, Button, Card, Tag, Flex } from "antd";

const GameInput: React.FC<{ onSearch: (gameData: any) => void }> = ({
  onSearch,
}) => {
  // gameData is fetched from W2B API response. 
  const [gameName, setGameName] = React.useState("");
  const [gameData, setGameData] = React.useState<any>(null);

  const handleSearch = async () => {
    try {
      if (gameName === "") return setGameData(null);
      const response = await fetch(
        `http://localhost:8000/games/search/${gameName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch game data!");
      }
      const data = await response.json();
      setGameData(data);
      onSearch(data);
    } catch (error) {
      console.error("Error searching for game:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
      <Flex gap={10}>
        <Input value={gameName} onChange={(e) => setGameName(e.target.value)} />
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Flex>

      {gameData && gameData.length !== 0? (
        <Card
          title={gameData.game_name}
          style={{ width: 300, margin: "20px", borderRadius: 10 }}
          hoverable
          cover={
            <img
              alt={gameData.game_name}
              src={gameData.gameImageUrl}
              style={{ borderRadius: "0 0 0 0", maxHeight: 200 }}
            />
          }
        >
          <p style={{ fontWeight: "bold", marginBottom: 5 }}>Release Date:</p>
          <p>{formatDate(gameData.date)}</p>
          <p style={{ fontWeight: "bold", marginBottom: 5 }}>Price:</p>
          <p>{formatPrice(gameData.price)}</p>
          <p style={{ fontWeight: "bold", marginBottom: 5 }}>Wait Time:</p>
          {parseFloat(gameData.time) >= 30 ? (
            <Tag color="red">{gameData.time} days, DO NOT BUY</Tag>
          ) : (
            <Tag color="orange">{gameData.time} days, hold</Tag>
          )}
        </Card>
      ): 
      <p>There is no game to show 🥹. Please type any game names!</p>}
    </>
  );
};

export default GameInput;
