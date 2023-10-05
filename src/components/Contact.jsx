import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

function Contact({ content, controls }) {
  return (
    <>
      <AnimatePresence>
        <motion.div animate={controls}>
          <div className="name-title">
            <h2>{content.contactTitle}</h2>
          </div>
          <div className="contact-frame">
            <div className="contact-email">
              <div className="icon-mail">
                <Icon icon="arcticons:mail" color="black" width={60} />
              </div>
              <form action="">
                <input type="text" placeholder={content.placeHolderSubject} />
                <textarea
                  placeholder={content.placeHolderMessage}
                  cols="30"
                  rows="10"
                ></textarea>
                <button>{content.sendButtonText}</button>
              </form>
            </div>
            <div className="contact-detail">
              <h3>{content.contactSocialLogo}</h3>
              <div className="social-cont">
                <a href="https://github.com/omargonzalez996">
                  <Icon
                    className="social-icon"
                    icon="bi:github"
                    color="white"
                    width={50}
                  />
                </a>
                <a href="https://www.linkedin.com/in/luis-omar-gonzález-garcía-0853b5257/">
                  <Icon
                    className="social-icon"
                    icon="bi:linkedin"
                    color="white"
                    width={50}
                  />
                </a>
                <a href="https://wa.me/524661010252">
                  <Icon
                    className="social-icon"
                    icon="uim:whatsapp"
                    color="white"
                    width={60}
                  />
                </a>
                <a href="https://discordapp.com/users/220285666292924417">
                  <Icon
                    className="social-icon"
                    icon="fontisto:discord"
                    color="white"
                    width={50}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Contact;
