"use client";

import Welcome from "@/component/Welcome/Welcome";
import AnimateTitle from "@/component/AnimateTitle/AnimateTitle";
import RightPrice from "@/component/RightPrice";
import styles from "./page.module.css";
import { useState } from "react";
import "./page.scss";

export default function Home() {
  const [welcomePage, setWelcomePage] = useState(true);
  const [chosenGame, setChosenGame] = useState("");

  const handleCloseWelcome = () => {
    if (localStorage.getItem("name")) {
      setWelcomePage(false);
    } else return;
  };

  const chooseAGame = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setChosenGame(e.currentTarget.innerText);
  };

  return (
    <div className="page">
      <main className={styles.main}>
        {!chosenGame && <AnimateTitle />}
        {welcomePage && <Welcome handleCloseWelcome={handleCloseWelcome} />}
        {(!welcomePage && !chosenGame) && (
          <div>
            <li onClick={chooseAGame}>Tic Tac Toe</li>
            <li onClick={chooseAGame}>Pierre feuille ciseaux</li>
            <li onClick={chooseAGame}>Le juste prix</li>
          </div>
        )}
        {/* {chosenGame === "Tic Tac Toe" && <TicTacToe />} */}
        {/* {chosenGame === "Pierre feuille ciseaux" && <PFC />} */}
        {chosenGame === "Le juste prix" && <RightPrice />}
      </main>
    </div>
  );
}
