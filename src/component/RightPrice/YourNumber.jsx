import { useState } from "react";

const YourNumber = () => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(100);
  const [answer, setAnswer] = useState(0);
  const [win, setWin] = useState(false)

  const getFirstNumber = () => {
    setAnswer(Math.floor((maxNumber + minNumber) / 2)); 
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
    setMinNumber(answer); 
    const diff = maxNumber - answer;

    if (diff > 100) {
      setAnswer(answer + 100);
    } else if (diff > 50) {
      setAnswer(answer + 50);
    } else if (diff > 10) {
      setAnswer(answer + 10);
    } else if (diff > 5) {
      setAnswer(answer + 5);
    } else if (diff > 1) {
        setAnswer(answer + 1);
  };
}

  const changeMaxAndGiveAnAnswer = () => {
    setMaxNumber(answer); // Ajuster le maximum à la réponse actuelle
    const diff = answer - minNumber;

    if (diff > 100) {
      setAnswer(answer - 100);
    } else if (diff > 50) {
      setAnswer(answer - 50);
    } else if (diff > 10) {
      setAnswer(answer - 10);
    } else if (diff > 5) {
      setAnswer(answer - 5);
    } else if (diff > 1) {
        setAnswer(answer - 1);
  };
  };

  const reMatch = () => {
    setMinNumber(0)
    setMaxNumber(100)
    setAnswer(0)
    setWin(false)
  }



  return (
    <section>
      <h2>Vous faites deviner</h2>
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
      
      {answer > 0 && <p>Le nombre proposé est : {answer}</p>}
      {answer > 0 && <div>
        <button onClick={changeMinAndGiveAnAnswer}>C&apos;est plus</button>
        <button onClick={changeMaxAndGiveAnAnswer}>C&apos;est moins</button>
        <button onClick={() => {setWin(true)}}>C&apos;est exact</button>
      </div>}
      </>}
      {win && <div>
        <p>Party_Robot a encore gagné !</p>
        <button onClick={reMatch}>Rejouer</button>
      </div>}
    </section>
  );
};

export default YourNumber;
