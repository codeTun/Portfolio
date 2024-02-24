import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/suit.png";
import SocialIcons from "./SocialIcons";

const Hero = ({ name }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: 1.1, opacity: 1 });
  }, [controls]);

  const styles = {
    landingImage: {
      position: "absolute",
      margin: "auto",
      opacity: "0.2",
      width: "100%",
      maxWidth: "500px",

      "@media (max-width: 768px)": {
        height: "auto",
      },
      "@media (min-width: 1024px)": {
        maxWidth: "800px",
      },
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "var(--text-color)",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: "20px",
      marginTop: "-100px",
    },

    name: {
      color: "var(--hl-color)",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "20px",
    },
  };

  return (
    <>
      <div className="textContainer" style={styles.textContainer}>
        <motion.h1
          className="name"
          style={styles.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          {name}
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
              typewriter
                .changeDelay(50)
                .typeString("Software Engineer")
                .start();
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
