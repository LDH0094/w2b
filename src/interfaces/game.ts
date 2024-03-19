export interface Game {
    _id: string;
    price: string;
    date: string;
    time: string;
    game_name: string;
  }
  
  interface GameCollection {
    [gameName: string]: Game;
  }