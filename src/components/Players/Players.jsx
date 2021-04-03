import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Players.css";

const Players = props => {
  const player = props.player;
//   console.log("player", player);
  return (
    <div className="player-card">
      <div>
        <img src={player.img} />
      </div>
      <div className="player-info">
        <h2>{player.name}</h2>
        <p>Yearly Income:{player.salary}</p>
        <button className='btn' onClick={()=>props.handleAddPlayer(player)}>
          <FontAwesomeIcon icon={faUser} /> Add Player
        </button>
      </div>
    </div>
  );
};

export default Players;
