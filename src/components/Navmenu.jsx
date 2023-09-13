import React from "react";
import Square from "./square";
import { useEffect, useState } from "react";

function Navmenu({ content, setLocation, controls }) {
  const [HomeActive, setHomeActive] = useState(false);
  const [ProjActive, setProjActive] = useState(false);
  const [ContactActive, setContactActive] = useState(false);

  const navSelect = (option) => {
    console.log(`click: ${option}`);
    if (option == 1) {
      setHomeActive(true);
      setProjActive(false);
      setContactActive(false);
      setLocation(1);
    }
    if (option == 2) {
      setHomeActive(false);
      setProjActive(true);
      setContactActive(false);
      setLocation(2);
    }
    if (option == 3) {
      setHomeActive(false);
      setProjActive(false);
      setContactActive(true);
      setLocation(3);
    }
    controls.set({ y: 30 });
    controls.start({ y: 0 });
  };

  useEffect(() => {
    setHomeActive(true);
  }, []);
  
  return (
    <>
      <div className="navigator-menu-cont">
        <ul>
          <li onClick={() => navSelect(1)}>
            <Square active={HomeActive} />
            {content.home}
          </li>
          <li onClick={() => navSelect(2)}>
            <Square active={ProjActive} />
            {content.projects}
          </li>
          <li onClick={() => navSelect(3)}>
            <Square active={ContactActive} />
            {content.contact}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navmenu;
