import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function Projects({ controls }) {
  return (
    <>
      <AnimatePresence>
        <motion.div animate={controls}>
          <div className="name-title">
            <h2>Projects</h2>
          </div>
          <div className="projects-container">
            <div className="project-container">
              <h3>Project1</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src="https://placehold.co/300x200" alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas est cumque neque asperiores error corrupti
                    accusantium! Ipsa possimus eveniet impedit magni debitis
                    tempora exercitationem, tempore et! Maxime quis rem vel.
                  </p>
                  <div className="project-links-cont">
                      <button>Link</button>
                      <button>Link</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-container">
              <h3>Project2</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src="https://placehold.co/300x200" alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas est cumque neque asperiores error corrupti
                    accusantium! Ipsa possimus eveniet impedit magni debitis
                    tempora exercitationem, tempore et! Maxime quis rem vel.
                  </p>
                  <div className="project-links-cont">
                      <button>Link</button>
                      <button>Link</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-container">
              <h3>Project3</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src="https://placehold.co/300x200" alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas est cumque neque asperiores error corrupti
                    accusantium! Ipsa possimus eveniet impedit magni debitis
                    tempora exercitationem, tempore et! Maxime quis rem vel.
                  </p>
                  <div className="project-links-cont">
                      <button>Link</button>
                      <button>Link</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Projects;
