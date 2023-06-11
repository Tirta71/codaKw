import React from "react";
import { Link } from "react-router-dom";
import "../../css/navbar/games/games.css";
import { gameData } from "../../data/GameData";

export default function Games() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>GAME</h1>
        </div>
        <div className="container-card">
          {gameData.map((game) => (
            <Link to={`/games/${game.slug}`} key={game.id}>
              <div className="container-games">
                <div className="gambar-games">
                  <img src={game.image} alt={game.name} />
                </div>
                <div className="title-games">{game.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
