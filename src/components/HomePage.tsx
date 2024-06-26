import React, { useState, useEffect } from "react";
import { Card, Spin, Tag } from "antd";
import { Game } from "../interfaces/game";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:8000/games", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }

      const data = await response.json();
      const gamesArray = Object.keys(data).map((key) => data[key]);

      setGames(gamesArray);
      console.log("GAMES: ", gamesArray);

      setLoading(false);
    } catch (error: any) {
      console.error("Error fetching games:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    });
    return formatter.format(price);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const calculateWaitTime = (releaseDate: string) => {
    const currentDate = new Date();
    const releaseDateObj = new Date(releaseDate);
    const differenceInDays = Math.floor(
      (releaseDateObj.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
    );
    return differenceInDays;
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {loading ? (
        <Spin size="large" />
      ) : (
        games.map((game, index) => (
          <Link key={index} to={`/game/${game._id}`}>
         
          <Card
            key={index}
            title={game.game_name}
            style={{ width: 300, margin: "20px", borderRadius: 10 }}
            hoverable
            cover={
              <img
                alt={game.game_name}
                src={game.gameImageUrl}
                style={{ borderRadius: "0 0 0 0", maxHeight: 200 }}
              />
            }
          >
            <p style={{ fontWeight: "bold", marginBottom: 5 }}>Release Date:</p>
            <p>{formatDate(game.date)}</p>
            <p style={{ fontWeight: "bold", marginBottom: 5 }}>Price:</p>
            <p>{formatPrice(parseFloat(game.price))}</p>
            <p style={{ fontWeight: "bold", marginBottom: 5 }}>Wait Time:</p>

            {parseFloat(game.time) >= 30 ? (
              <Tag color="red">{game.time} days, DO NOT BUY</Tag>
            ) : (
              <Tag color="orange">{game.time} days, hold</Tag>
            )}
          </Card>
          </Link>
        ))
      )}
    </div>
  );
};

export default Homepage;
