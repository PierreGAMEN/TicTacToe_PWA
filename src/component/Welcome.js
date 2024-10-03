import { useEffect, useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("");
  const [registerName, setRegisterName] = useState("");

  const setNewName = () => {
    localStorage.setItem("name", name);
    setRegisterName(name);
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
    <section>
      {registerName ? (
        <h2>Bienvenue {registerName}</h2>
      ) : (
        <div>
          <label htmlFor="name">Nom d&apos;utilisateur</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            id="name"
            type="text"
          />
          <button onClick={setNewName}>OK</button>
        </div>
      )}
      <div>
        <button>Commencer</button>
        <button onClick={deconnexion}>Se déconnecter</button>
      </div>
    </section>
  );
};

export default Welcome;
