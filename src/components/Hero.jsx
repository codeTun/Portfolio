import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/suit2.jpg";
import SocialIcons from "./SocialIcons";

const Hero = ({ name }) => {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    controls.start({ scale: 1.1, opacity: 1 });
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [controls]);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const styles = {
    landingImage: {
      position: "absolute",
      margin: "auto",
      opacity: "0.2",
      width: "500px", // Set a fixed width

      maxWidth: windowWidth <= 768 ? "500px" : "800px",
      height: windowWidth <= 768 ? "auto" : undefined, // Set a fixed height
      borderRadius: "50%", // Make the image a circle
      objectFit: "cover",
    },

    textContainer: {
      
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "var(--text-color)",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: "23px",
      marginTop: "-70px",
      marginRight: "50px",
    },

    name: {
      color: "var(--hl-color)",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "30px",
      
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
