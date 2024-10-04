// import "./rightPrice.scss";
import { useState } from "react";
import YouGuess from "./YouGuess";
import YourNumber from "./YourNumber";
import './index.scss'

const RightPrice = () => {
  const [gameMode, setGameMode] = useState("");
  return (
    <section className="RightPrice">
        {!gameMode && <>
      <p>Bonjour et bienvenue au jeu du juste prix !</p>
      <p>Quel mode de jeu voulez-vous jouer ?</p>
      <button
        id="1"
        onClick={(e) => {
          setGameMode(e.target.id);
        }}
      >
        Vous devinez un nombre
      </button>
      <button
        id="2"
        onClick={(e) => {
          setGameMode(e.target.id);
        }}
      >
        Vous faites deviner un nombre
      </button></>}
      {gameMode == "1" && <YouGuess />}
      {gameMode == "2" && <YourNumber />}
      <button onClick={() => {setGameMode("")}}>Retour aux différents mode</button>
      <button>Retour aux différents jeux</button>
    </section>
  );
};

export default RightPrice;
