import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* upper elements */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hello There, <br />
            I'm Folorunsho Ahmed.
            <br />
            <h6>a software developer.</h6>
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I create solutions
            <br />
            using technologies
          </motion.span>
        </div>

        {/* person image */}

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="/bitmoji.png"
            alt=""
          />
        </motion.div>
        {/* email */}
        <a className={css.email} href="mailto:folorunshoahmedolajide@gmail.com">
          folorunshoahmedolajide@gmail.com
        </a>
        {/* lower elements */}

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">2</div>
            <div className="secondText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="/certificate.png" alt="" />
            <span>CERTIFIED PROBLEM</span>
            <span>SOLVER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
