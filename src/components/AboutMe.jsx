import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpg";
import { useTranslation } from "react-i18next";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container bg-transparent">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 10, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img
              src={aboutMeImg}
              alt="Elazheri Iheb image while coding ."
              className="filter contrast-200"
            />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                {t("about.welcome")}
              </motion.h4>
              <motion.h5 variants={paragraphVariants}>
                {t("about.title")}
              </motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  {t("about.description1")}{" "}
                  <span className="text-hl-color">
                    {" "}
                    {t("about.highlight1")}
                  </span>
                  .
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  {t("about.description2")}{" "}
                  <span className="text-hl-color">
                    {" "}
                    {t("about.highlight2")}
                  </span>
                  {t("about.description3")}{" "}
                  <span className="text-hl-color">
                    {" "}
                    {t("about.highlight3")}
                  </span>{" "}
                  {t("about.description4")}
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  {t("about.description5")}
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name={t("about.view-portfolio")} />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
