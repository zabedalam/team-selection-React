import "./App.css";
import PlayersData from "./Data/Data.json";
import PlayerInfo from "./components/Players/Players";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [players, setPlayers] = useState([]);
  const [cart,setCart]=useState([]);

  useEffect(() => {
    setPlayers(PlayersData);
    console.log(PlayersData);
  }, []);

  const handleAddPlayer = player => {
    const newPlayer = [...cart, player];
    setCart(newPlayer);

    // console.log("Clicked Player");
  };
  return (
    <div>
      <Header></Header>
      <div className="App">
      <div className="player-container">
        {" "}
        {players.map(player => (
          <PlayerInfo
            player={player}
            key={player.id}
            handleAddPlayer={handleAddPlayer}
          ></PlayerInfo>
        ))}
      </div>

      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
    </div>
    
  );
}

export default App;
