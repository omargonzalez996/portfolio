import React, { useEffect, useState } from "react";
import Square from "./square";

function LanguajeSelector({ languaje, setLanguaje }) {
  const [enActive, setEnActive] = useState(false);
  const [esActive, setEsActive] = useState(false);

  useEffect(() => {
    if (languaje == 1) {
      setEnActive(true);
    }
    if (languaje == 2) {
      setEsActive(true);
    }
  }, []);

  const langSelect = (option) => {
    if (option == 1) {
      setEnActive(true);
      setEsActive(false);
      setLanguaje(option);
    }
    if (option == 2) {
      setEnActive(false);
      setEsActive(true);
      setLanguaje(option);
    }
  };

  return (
    <div className="languaje-container">
      <ul>
        <li onClick={() => langSelect(1)}>
          <div className={`squareL-${enActive ? "active" : "inactive"}`}></div>
          EN
        </li>
        <li onClick={() => langSelect(2)}>
          <div className={`squareL-${esActive ? "active" : "inactive"}`}></div>
          ES
        </li>
      </ul>
    </div>
  );
}

export default LanguajeSelector;
