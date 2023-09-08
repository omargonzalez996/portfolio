import Navmenu from "./components/Navmenu";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import logo from "./assets/logo.png";
import { useAnimation } from "framer-motion";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState(1);
  const controls = useAnimation();
  return (
    <>
      <img id="logo-main" src={logo} alt="logo.svg" />
      <Navmenu setLocation={setLocation} controls={controls} />
      {location == 1 ? <Home controls={controls} /> : null}
      {location == 2 ? <Projects controls={controls} /> : null}
      {location == 3 ? <Contact controls={controls} /> : null}
    </>
  );
}

export default App;
