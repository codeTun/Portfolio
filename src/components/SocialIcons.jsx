import { motion } from "framer-motion";

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  const openLinkInNewWindow = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <div
        className="icon"
        style={styles.icon}
        onClick={() => openLinkInNewWindow("https://github.com/codeTun")}
      >
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Elazheri Iheb' GitHub Profile"
        ></motion.i>
      </div>
      <div
        className="icon"
        style={styles.icon}
        onClick={() =>
          openLinkInNewWindow(
            "https://www.linkedin.com/in/iheb-elazheri-aa55b0262/"
          )
        }
      >
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Elazheri Iheb' LinkedIn Profile"
        ></motion.i>
      </div>
      <div
        className="icon"
        style={styles.icon}
        onClick={() =>
          openLinkInNewWindow("https://www.instagram.com/itzz_iheb/")
        }
      >
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Elazheri Iheb' Instagram Profile"
        ></motion.i>
      </div>
    </div>
  );
};

export default SocialIcons;
