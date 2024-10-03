import { useEffect, useState } from "react";
import "./welcome.scss";

const Welcome = () => {
  const [name, setName] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [tooLongName, setTooLongName] = useState(false);

  const setNewName = () => {
    if (name.length > 15) {
      setTooLongName(true);
    } else {
      setTooLongName(false);
      localStorage.setItem("name", name);
      setRegisterName(name);
      setName("");
    }
  };

  const deconnexion = () => {
    localStorage.clear();
    setRegisterName("");
  };

  useEffect(() => {
    const localStorageName = localStorage.getItem("name");
    if (localStorageName) {
      setRegisterName(localStorageName);
    }
  }, []);

  return (
    <section className="welcome">
      {registerName ? (
        <div>
          <h2>Bienvenue</h2>
          <h2>{registerName}</h2>
        </div>
      ) : (
        <div className="container_input">
          <label htmlFor="name">Nom d&apos;utilisateur</label>
          <div className="input_ok">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              id="name"
              type="text"
            />
            <button
              className={name && name.length <= 15 ? "ok" : "nok"}
              onClick={setNewName}
            >
              OK
            </button>
          </div>
          {tooLongName && <div>Attention ce nom est trop long</div>}
        </div>
      )}
      <div>
        <button>Commencer</button>
      </div>
      <button onClick={deconnexion}>Se déconnecter</button>
    </section>
  );
};

export default Welcome;
