export interface GameDetails {
    name: string;
    description: string;
    priceChange: { month: string; price: number }[];
    categories: string[];
  }
  
  // Dummy data for demonstration purposes
  const dummyGameDetails: GameDetails = {
    name: "Sample Game",
    description: "This is a sample game description.",
    priceChange: [
      { month: "January", price: 29.99 },
      { month: "February", price: 27.99 },
      { month: "March", price: 24.99 },
      { month: "April", price: 22.99 },
      { month: "May", price: 19.99 },
      { month: "June", price: 18.99 }
    ],
    categories: ["Action", "Adventure", "Indie"]
  };
  
  export default dummyGameDetails;
  