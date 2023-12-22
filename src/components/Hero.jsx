import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/suit.png";
import SocialIcons from "./SocialIcons";

const Hero = ({ name }) => {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ scale: 1.1, opacity: 1 });
  };

  const handleLeave = () => {
    controls.start({ scale: 1, opacity: 1 });
  };

  const styles = {
    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "var(--text-color)",  // Use the defined text color
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",  // Improved text shadow
      padding: "20px",  // Added padding for better spacing
    },

    name: {
      color: "var(--hl-color)",  // Use the defined highlight color for the name
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "20px",  // Adjusted padding for better spacing
    },
  };

  return (
    <>
      <div className="textContainer" style={styles.textContainer}>
        {/* Animated name */}
        <motion.h1
          className="name"
          style={styles.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={controls}
          whileHover={{ scale: 1.1, opacity: 1 }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          {name}
        </motion.h1>
        {/* Animated description */}
        <motion.div
          className="description"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {/* Typewriter effect for dynamic text animation without a cursor */}
          <Typewriter
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Software Engineer").start();
            }}
          />
        </motion.div>
      </div>
      {/* Animated landing image */}
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}  // Adjust the opacity to make the image more visible
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Elazheri Iheb"
        />
      </div>
      {/* Displaying social icons */}
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
