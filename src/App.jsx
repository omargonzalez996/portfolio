import Navmenu from "./components/Navmenu";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import logo from "./assets/logo.png";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import contentEs from "./constants/contentES.json";
import contentEn from "./constants/contentEN.json";
import LanguajeSelector from "./components/LanguajeSelector";
import backVideo from "./assets/bvid.mp4";

function App() {
  const [location, setLocation] = useState(1);
  const [content, setContent] = useState(contentEn);
  const [languaje, setLanguaje] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    changeLanguaje(languaje);
  }, [languaje]);

  const changeLanguaje = (option) => {
    if (option == 1) {
      setContent(contentEn);
    }
    if (option == 2) {
      setContent(contentEs);
    }
  };

  return (
    <>
      <video src={backVideo} autoPlay loop muted/>
      <LanguajeSelector languaje={languaje} setLanguaje={setLanguaje} />
      <img id="logo-main" src={logo} alt="logo.svg" />
      <Navmenu
        content={content.NAV}
        setLocation={setLocation}
        controls={controls}
      />
      {location == 1 ? (
        <Home content={content.HOME} controls={controls} />
      ) : null}
      {location == 2 ? (
        <Projects content={content.PROJECTS} controls={controls} />
      ) : null}
      {location == 3 ? (
        <Contact content={content.CONTACT} controls={controls} />
      ) : null}
    </>
  );
}

export default App;
