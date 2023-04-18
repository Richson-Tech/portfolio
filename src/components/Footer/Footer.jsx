import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { footerVariants, staggerChildren } from "../../utils/motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`padding ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br /> amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:folorunshoahmedolajide@gmail.com">Saying Hello!</a>
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Catch me Up :)</span>
          </div>

          <div className={css.menu}>
            <a href="https://github.com/Richson-Tech">
              <BsGithub size={35} />
            </a>
            <a href="https://www.twitter.com/richsongocrazy">
              <SiTwitter size={35} />
            </a>
            <a href="https://www.linkedin.com/in/folorunsho-ahmed-554620241/">
              <BsLinkedin size={35} />
            </a>
            <a href="https://wa.me/message/IANVGLPYCMKFG1">
              <IoLogoWhatsapp size={35} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Footer;
