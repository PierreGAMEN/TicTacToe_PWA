// import "./rightPrice.scss";
import { useState } from "react";
import YouGuess from "./YouGuess";
import YourNumber from "./YourNumber";
import "./index.scss";

const RightPrice = ({setChosenGame}) => {
  const [gameMode, setGameMode] = useState("");
  return (
    <section className="RightPrice">
      {!gameMode && (
        <>
          <div className="RightPrice_title">
            <p>Le</p>
            <p>juste</p>
            <p>Prix</p>
          </div>
          <div className="RightPrice_container_GameMode">
            <button
              id="1"
              onClick={(e) => {
                setGameMode(e.target.id);
              }}
            >
              Vous êtes candidat
            </button>
            <button
              id="2"
              onClick={(e) => {
                setGameMode(e.target.id);
              }}
            >
              Party_Robot est candidat
            </button>
          </div>
        </>
      )}
      {gameMode == "1" && <YouGuess />}
      {gameMode == "2" && <YourNumber />}
      {gameMode && <button
        onClick={() => {
          setGameMode("");
        }}
      >
        Retour aux différents mode
      </button>}
      <button onClick={() => setChosenGame("")}>Retour aux différents jeux</button>
    </section>
  );
};

export default RightPrice;
