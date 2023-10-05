import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import yo from "../assets/ppic.png";
function Home({ content, controls }) {
  return (
    <>
      <AnimatePresence>
        <motion.div animate={controls} className="up-cont">
          <div className="name-title">
            <h2>{content.homeTitle}</h2>
          </div>
          <div className="yomero-container">
            <img src={yo} alt="yomero.jpg" />
            <div className="yomero-text">
              <h3>{content.homeName}</h3>
              <h5>{content.homeDetail}</h5>
            </div>
          </div>
          <div className="info-cont">
            <p>{content.homeDesc}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Home;
