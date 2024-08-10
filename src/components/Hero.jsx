import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/iheb.jpg";
import SocialIcons from "./SocialIcons";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t } = useTranslation();

  useEffect(() => {
    controls.start({ scale: 1.1, opacity: 1 });
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [controls]);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  console.log(t("welcome.title"));

  const styles = {
    parentContainer: {
      display: "flex",
      flexDirection: windowWidth <= 768 ? "column-reverse" : "row",
      justifyContent: "center",
      alignItems: "center",
    },
    landingImage: {
      position: windowWidth > 768 ? "absolute" : "relative",
      margin: "0",
      opacity: "0.2",
      width: windowWidth <= 768 ? "100%" : "30%", // Adjust the width based on the window width
      height: "auto",
      borderRadius: "50%",
      objectFit: "cover",
      top: windowWidth > 768 ? "55%" : "55%",
      left: windowWidth > 768 ? "68%" : "auto",
      transform: windowWidth > 768 ? "translateY(-50%)" : "none",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "var(--text-color)",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: "18px",
      fontSize: windowWidth <= 768 ? "1.5em" : "1.5em", // Adjust the text size based on the window width
    },
    name: {
      color: "var(--hl-color)",
      fontWeight: "700",
      paddingBottom: "10px",
      fontSize: windowWidth <= 768 ? "1.8em" : "2.5em", // Adjust the text size based on the window width
    },
  };

  return (
    <>
      <div style={styles.parentContainer}>
        <div className="textContainer" style={styles.textContainer}>
          <motion.h1
            className="name"
            style={styles.name}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0, duration: 0.5, type: "spring" }}
          >
            {t("welcome.title")}
          </motion.h1>
          <motion.div
            className="description"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <Typewriter
              className="description"
              options={{
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter.changeDelay(50).typeString(t("home.title")).start();
              }}
            />
          </motion.div>
        </div>
        <div className="image-container">
          <motion.img
            className="landingImage"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            style={styles.landingImage}
            src={landingImage}
            alt="Elazheri Iheb"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <SocialIcons />
      </motion.div>
    </>
  );
};

export default Hero;