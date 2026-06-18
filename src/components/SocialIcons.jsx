import { motion } from "framer-motion";

// Social profiles rendered as accessible, keyboard-focusable links
const SOCIALS = [
  {
    href: "https://github.com/codeTun",
    icon: "fa-brands fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/iheb-elazheri-aa55b0262/",
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/itzz_iheb/",
    icon: "fa-brands fa-instagram",
    label: "Instagram",
  },
];

const SocialIcons = () => {
  const styles = {
    socialIcons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed", // Keep it pinned to the bottom across scroll positions
      left: "0",
      right: "0",
      bottom: "0",
      width: "100%",
    },
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      {SOCIALS.map((social, i) => (
        <motion.a
          key={social.label}
          className="icon"
          style={styles.icon}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Elazheri Iheb's ${social.label} profile`}
          title={`Elazheri Iheb's ${social.label} profile`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 + i * 0.1, duration: 0.5, type: "spring" }}
        >
          <i className={social.icon} aria-hidden="true"></i>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
