import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function Contact({ controls }) {
  return (
    <>
      <AnimatePresence>
        <motion.div animate={controls}>Contact</motion.div>
      </AnimatePresence>
    </>
  );
}

export default Contact;
