import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./People.module.scss";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewPort={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>

      <motion.div
        variants={footerVariants}
        className={`ypaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Tools I use</span>
          <p style={{ marginTop: "2rem" }}>
            These are tools that I use in creating solutions to world problems.
          </p>
          <p>There are more tools that I usebut few are listed here...</p>
        </div>

        {/* carousel */}

        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.Slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  {/* <img src={comment.img} alt="" /> */}
                  <div className="icon">
                    <comment.icon size={40} />
                  </div>
                  <p>{comment.comment}</p>

                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
