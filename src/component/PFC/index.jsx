import "./PFC.scss";

import { useState } from "react";
import PFC_robot from "./PFC_robot";

const PFC = () => {
  const [chosenMode, setChosenMode] = useState();

  const arrayPFC = [
    {
      element_name: "Pierre",
      img: "/pierre.png",
    },
    {
      element_name: "Feuille",
      img: "feuille.png",
    },
    {
      element_name: "Ciseaux",
      img: "ciseaux.png",
    },
  ];
  return (
    <section className="PFC">
      {!chosenMode && (
        <>
          <h2>Pierre Feuille Ciseaux</h2>
          <p>
            Dans ce jeu, vous devez choisir entre trois éléments : la pierre, la
            feuille et les ciseaux. La feuille bat la pierre, la pierre bat les
            ciseaux et les ciseaux battent la feuille.
          </p>
          <button id="robot" onClick={(e) => setChosenMode(e.target.id)}>
            Jouer contre Party_Robot
          </button>
        </>
      )}
      {chosenMode === "robot" && (
        <PFC_robot setChosenMode={setChosenMode} arrayPFC={arrayPFC} />
      )}
    </section>
  );
};

export default PFC;
