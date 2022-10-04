import { useState } from "react";

const Main = () => {
  const [state, setState] = useState(0);

  return (
  <div className="main">
    <input className="main-input" placeholder="Введите название команды"></input>
    <button className="main-button">OK</button>
  </div>
  );
};

export default Main;