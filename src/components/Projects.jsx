import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function Projects({ controls }) {
  return (
    <>
      <AnimatePresence>
        <motion.div animate={controls}>Projects</motion.div>
      </AnimatePresence>
    </>
  );
}

export default Projects;
