export interface Game {
    name: string;
    description: string;
    releaseDate: string;
    price: number;
    waitTime: number;
  }
  
  // Dummy data for demonstration purposes
  const dummyGames: Game[] = [
    {
      name: "Game 1",
      description: "Description for Game 1",
      releaseDate: "2022-01-01",
      price: 29.99,
      waitTime: 10
    },
    {
      name: "Game 2",
      description: "Description for Game 2",
      releaseDate: "2023-05-15",
      price: 39.99,
      waitTime: 5
    },
    {
      name: "Game 3",
      description: "Description for Game 3",
      releaseDate: "2020-11-30",
      price: 19.99,
      waitTime: 20
    }
  ];
  
  export default dummyGames;
  


  