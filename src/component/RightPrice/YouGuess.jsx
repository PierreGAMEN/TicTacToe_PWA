import { useEffect, useState } from "react";

const YouGuess = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [answer, setAnswer] = useState(0);
  const [indication, setIndication] = useState("");

  const pickRandomNumber = (min, max) => {
    const random = Math.floor(Math.random() * max) + min;
    setRandomNumber(random);
  };

  useEffect(() => {
    pickRandomNumber(1, 1000);
  }, []);

  const moreLessWin = () => {
    if (answer === null || randomNumber === null) {
      return;
    }

    if (answer < randomNumber) {
      setIndication("C'est plus !");
    } else if (answer > randomNumber) {
      setIndication("C'est moins !");
    } else {
      setIndication("Bravo !");
    }
  };

  const Rematch = () => {
    setIndication("");
    pickRandomNumber(1, 1000);
    setAnswer(0);
  };

  const addToAnswer = (number) => {
    setAnswer(parseInt(answer) + number);
  };

  const substractToAnswer = (number) => {
    setAnswer(parseInt(answer) - number);
  };

  return (
    <section>
      <p>Vous avez choisis de deviner un nombre</p>
      <input
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        type="number"
        name="answer"
      />
      <button onClick={moreLessWin}>Ok</button>
      <div>
        <button
          onClick={() => {
            addToAnswer(1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            addToAnswer(5);
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            addToAnswer(10);
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            addToAnswer(50);
          }}
        >
          +50
        </button>
        <button
          onClick={() => {
            addToAnswer(100);
          }}
        >
          +100
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            substractToAnswer(1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            substractToAnswer(5);
          }}
        >
          -5
        </button>
        <button
          onClick={() => {
            substractToAnswer(10);
          }}
        >
          -10
        </button>
        <button
          onClick={() => {
            substractToAnswer(50);
          }}
        >
          -50
        </button>
        <button
          onClick={() => {
            substractToAnswer(100);
          }}
        >
          -100
        </button>
      </div>

      {indication && <p>{indication}</p>}
      {indication == "Bravo !" && <button onClick={Rematch}>Rejouer</button>}
    </section>
  );
};

export default YouGuess;
