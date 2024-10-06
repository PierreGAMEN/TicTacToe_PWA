import { useState, useEffect } from "react";

const PFC_robot = ({ setChosenMode, arrayPFC }) => {
  const [step, setStep] = useState({
    step1: true,
    step2: false,
  });
  const [element, setElement] = useState({
    element_name: "",
    img: "",
  });

  const [robotElement, setRobotElement] = useState({
    element_name: "",
    img: "",
  });

  const [result, setResult] = useState({
    yourScore: 0,
    robotScore: 0,
    message: "", // Pour afficher "win", "loose", ou "equal"
  });

  const yourChoiceFunction = (element) => {
    setElement({ element_name: element.element_name, img: element.img });
  };

  const robotChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    const elementRobot = arrayPFC[randomChoice];
    setRobotElement({
      element_name: elementRobot.element_name,
      img: elementRobot.img,
    });
  };

  const fightFunction = () => {
    const player = element.element_name;
    const robot = robotElement.element_name;
    console.log("Player:", player, "Robot:", robot);

    if (player === robot) {
      setResult((prevResult) => ({
        ...prevResult,
        message: "equal",
      }));
    } else {
      switch (player) {
        case "Pierre":
          if (robot === "Feuille") {
            setResult((prevResult) => ({
              ...prevResult,
              robotScore: prevResult.robotScore + 1,
              message: "loose",
            }));
          } else if (robot === "Ciseaux") {
            setResult((prevResult) => ({
              ...prevResult,
              yourScore: prevResult.yourScore + 1,
              message: "win",
            }));
          }
          break;
        case "Feuille":
          if (robot === "Ciseaux") {
            setResult((prevResult) => ({
              ...prevResult,
              robotScore: prevResult.robotScore + 1,
              message: "loose",
            }));
          } else if (robot === "Pierre") {
            setResult((prevResult) => ({
              ...prevResult,
              yourScore: prevResult.yourScore + 1,
              message: "win",
            }));
          }
          break;
        case "Ciseaux":
          if (robot === "Pierre") {
            setResult((prevResult) => ({
              ...prevResult,
              robotScore: prevResult.robotScore + 1,
              message: "loose",
            }));
          } else if (robot === "Feuille") {
            setResult((prevResult) => ({
              ...prevResult,
              yourScore: prevResult.yourScore + 1,
              message: "win",
            }));
          }
          break;
        default:
          setResult((prevResult) => ({
            ...prevResult,
            message: "equal",
          }));
      }
    }
  };

  useEffect(() => {
    if (element.element_name && robotElement.element_name) {
      fightFunction();
    }
  }, [element, robotElement]);

  const startTheGame = (element) => {
    setStep({
      step1: false,
      step2: true,
    });
    yourChoiceFunction(element);
    robotChoice();
  };

  const resetChoices = () => {
    setStep({
      step1: true,
      step2: false,
    });
    // Remet à zéro les choix du joueur et du robot, ainsi que le message de résultat
    setElement({
      element_name: "",
      img: "",
    });
    setRobotElement({
      element_name: "",
      img: "",
    });
    setResult((prevResult) => ({
      ...prevResult,
      message: "",
    }));
  };

  return (
    <section className="PFC_robot">
      {step.step1 && (
        <>
          <h2>Choisissez votre élément</h2>
          <div className="container_choice">
            {arrayPFC.map((element, index) => (
              <div className="choice" onClick={() => startTheGame(element)} key={index}>
                <img src={element.img} alt="" />
                {element.element_name}
              </div>
            ))}
          </div>
        </>
      )}
      {step.step2 && (
        <>
          <div>
            <img className="robot_choice_img" src={robotElement.img} />{" "}
          </div>
          <div>
            <img className="your_choice_img" src={element.img} alt="" />
          </div>
          {result.message && (
            <p className="result">
              {result.message === "win" && "Gagné"}
              {result.message === "loose" && "Perdu"}
              {result.message === "equal" && "Égalité"}
            </p>
          )}

          <h2 className="your_score">YOU : {result.yourScore}</h2>
          <h2 className="robot_score">Robot : {result.robotScore}</h2>

          <button className="rematch" onClick={resetChoices}>
            Rejouer
          </button>
        </>
      )}
      <button onClick={() => setChosenMode("")}>Choisir le mode de jeu</button>
    </section>
  );
};

export default PFC_robot;
