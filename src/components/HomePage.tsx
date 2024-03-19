import React, { useState, useEffect } from "react";
import { Card, Spin } from "antd"; // Import Spin component for loading indicator
import { Game } from "../interfaces/game";

const Homepage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/games", { mode: "no-cors",});
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        console.log("DATA: ", data);
        
        setGames(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching games:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {loading ? ( // Show loading indicator if loading is true
        <Spin size="large" />
      ) : (
        // Render game cards if loading is false
        games.map((game, index) => (
          <Card key={index} title={game.game_name}>
            <p>{game.date}</p>
            <p>Release Date: {game.date}</p>
            <p>Price: {game.price}</p>
            <p>Wait Time: {game.time} days</p>
          </Card>
        ))
      )}
    </>
  );
};

export default Homepage;
