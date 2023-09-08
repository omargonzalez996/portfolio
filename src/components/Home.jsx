import React from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
function Home({ controls }) {
  return (
    <>
      <AnimatePresence>
        <motion.div animate={controls} className="up-cont">
          <div className="name-title">
            <h2>Omar González</h2>
          </div>
          <div className="social-icons-cont">
            <Icon id="Icon" icon="formkit:twitter" color="white" />
            <Icon id="Icon" icon="bi:github" color="white" />
          </div>
          <div className="info-cont">
            <p>
              I work as a full time software developer, mainly in Javascript and
              Node.js projects. I have a degree in Information and Communication
              Technology Engineering from ITESS and I have knowledge in web
              development, object oriented programming and relational databases.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Home;