import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import fisiopage from "../assets/proy_fisioro.jpg";
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
              <h3>Fisioterapia - RO landing page</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src={fisiopage} alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>
                    Simple landing page for physiotherapy services.
                    <br />
                    created using typescript, react and firebase.
                  </p>
                  <div className="project-links-cont">
                    <a href="https://github.com/omargonzalez996/LPBlanca">
                      <button>
                        <Icon id="Icon" icon="bi:github" color="white" />
                        <p>Repo</p>
                      </button>
                    </a>
                    <a href="https://fisioterapiaro.com">
                      <button>
                        <Icon icon="material-symbols:share" color="white" />
                        <p>Link</p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-container">
              <h3>Fisioterapia - RO landing page</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src={fisiopage} alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>
                    Simple landing page for physiotherapy services.
                    <br />
                    created using typescript, react and firebase.
                  </p>
                  <div className="project-links-cont">
                    <a href="https://github.com/omargonzalez996/LPBlanca">
                      <button>
                        <Icon id="Icon" icon="bi:github" color="white" />
                        <p>Repo</p>
                      </button>
                    </a>
                    <a href="https://fisioterapiaro.com">
                      <button>
                        <Icon icon="material-symbols:share" color="white" />
                        <p>Link</p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-container">
              <h3>Fisioterapia - RO landing page</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src={fisiopage} alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>
                    Simple landing page for physiotherapy services.
                    <br />
                    created using typescript, react and firebase.
                  </p>
                  <div className="project-links-cont">
                    <a href="https://github.com/omargonzalez996/LPBlanca">
                      <button>
                        <Icon id="Icon" icon="bi:github" color="white" />
                        <p>Repo</p>
                      </button>
                    </a>
                    <a href="https://fisioterapiaro.com">
                      <button>
                        <Icon icon="material-symbols:share" color="white" />
                        <p>Link</p>
                      </button>
                    </a>
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
