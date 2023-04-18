import React from "react";
import { fadeIn, staggerChildren } from "../../utils/motion";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Projects</span>
            <p style={{ marginTop: "5px" }}>These are some of my projects</p>
          </div>
          <span className="secondaryText">
            <a href="https://github.com/Richson-Tech">See more Projects</a>
          </span>
        </div>

        {/* {images of my projects} */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./nike.png"
            alt="project"
          />

          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./youtube.png"
            alt="project"
          />
          <a href="https://nike-store-self.vercel.app/">
            <button className="button">
              <span>Visit website</span>
            </button>
          </a>
          <a href="https://fit-club-git-master-richson-tech.vercel.app/">
            <button className="button">
              <span>Visit website</span>
            </button>
          </a>
          <a href="https://clone-90e87.web.app/">
            <button className="button">
              <span>Visit website</span>
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
