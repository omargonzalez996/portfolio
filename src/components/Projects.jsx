import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import fisiopage from "../assets/proy_fisioro.jpg";
function Projects({ content, controls }) {
  return (
    <>
      <AnimatePresence>
        <motion.div animate={controls}>
          <div className="name-title">
            <h2>{content.projectTitle}</h2>
          </div>
          <div className="projects-container">
            <div className="project-container">
              <h3>{content.p1Title}</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src={fisiopage} alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>{content.p1Desc}</p>
                  <div className="project-links-cont">
                    <a href={content.p1GitLink}>
                      <button>
                        <Icon id="Icon" icon="bi:github" color="white" />
                        <p>Repo</p>
                      </button>
                    </a>
                    <a href={content.p1Link}>
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
              <h3>{content.p1Title}</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src={fisiopage} alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>{content.p1Desc}</p>
                  <div className="project-links-cont">
                    <a href={content.p1GitLink}>
                      <button>
                        <Icon id="Icon" icon="bi:github" color="white" />
                        <p>Repo</p>
                      </button>
                    </a>
                    <a href={content.p1Link}>
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
              <h3>{content.p1Title}</h3>
              <div className="project-details-cont">
                <div className="project-image-cont">
                  <img src={fisiopage} alt="proy_image" />
                </div>
                <div className="project-desc-cont">
                  <p>{content.p1Desc}</p>
                  <div className="project-links-cont">
                    <a href={content.p1GitLink}>
                      <button>
                        <Icon id="Icon" icon="bi:github" color="white" />
                        <p>Repo</p>
                      </button>
                    </a>
                    <a href={content.p1Link}>
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
