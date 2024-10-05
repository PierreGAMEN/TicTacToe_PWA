import { useState } from "react";

const YourNumber = () => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(100);
  const [answer, setAnswer] = useState(0);
  const [win, setWin] = useState(false)
  const [numberOfTry, SetnumberOfTry] = useState(0)

  const getFirstNumber = () => {
    setAnswer(Math.floor((maxNumber + minNumber) / 2));
    SetnumberOfTry(numberOfTry + 1)
  };

  const getMinimum = (e) => {
    const value = Number(e.target.value); 
    setMinNumber(value < 0 ? 0 : value); 
  };

  const getMaximum = (e) => {
    const value = Number(e.target.value); 
    setMaxNumber(value);
  };

  const changeMinAndGiveAnAnswer = () => {
    SetnumberOfTry(numberOfTry + 1)
    setMinNumber(answer); 
    const diff = maxNumber - answer;
    if (diff > 2) {
      setAnswer(answer + Math.round((diff/2)));
    }
    else {
      setAnswer(answer + 1)
    }
}

  const changeMaxAndGiveAnAnswer = () => {
    SetnumberOfTry(numberOfTry + 1)
    setMaxNumber(answer); 
    const diff = answer - minNumber;
    if (diff > 2) {
      setAnswer(answer - Math.round((diff/2)));
    }
    else {
      setAnswer(answer - 1)
    }
  }

  const reMatch = () => {
    setMinNumber(0)
    setMaxNumber(100)
    setAnswer(0)
    setWin(false)
    SetnumberOfTry(0)
  }



  return (
    <section className="YourNumber">
  
      {!answer && <>
      <p>Veuillez choisir la plage de jeu </p>
      <div className="container_input">
        <label htmlFor="min">Minimum</label>
        <input value={minNumber} onChange={getMinimum} type="number" id="min" />
      </div>
      <div className="container_input">
        <label htmlFor="max">Maximum</label>
        <input value={maxNumber} onChange={getMaximum} type="number" id="max" />
      </div>
      <button onClick={getFirstNumber}>Commencer</button>
      {maxNumber <= minNumber && (
        <p>
          Attention le nombre maximal est inférieur ou égal au nombre minimal
        </p>
      )}
      </>}
      {!win && <>
      {answer > 0 && <div className="container_button">
        <button onClick={changeMinAndGiveAnAnswer}>C&apos;est plus</button>
        <button onClick={changeMaxAndGiveAnAnswer}>C&apos;est moins</button>
        <button onClick={() => {setWin(true)}}>C&apos;est exact</button>
      </div>}
      <div className="container_robot">
      {answer > 0 && <p className="answer">{answer}</p>}
      {answer > 0 && <img className="robot" src="robot0.svg"></img>}
      </div>
      
      {answer > 0 && <div>Tentative: {numberOfTry}</div>}
      </>}
      {win && <div>
        <p>Party_Robot a encore gagné !</p>
        <button onClick={reMatch}>Rejouer</button>
      </div>}
    </section>
  );
};

export default YourNumber;
