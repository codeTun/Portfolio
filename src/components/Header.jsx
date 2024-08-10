import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";
import LanguageSelectorButton from "./LanguageSelectorButton";

/**
 * Represents the header component containing the logo and navigation links.
 *
 * @component
 */

const Header = () => {
  return (
    <header className="header flex items-center justify-between">
      <div className="flex items-center">
        {/* Link to the home page */}
        <NavLink to="/">
          {/* Animated logo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "spring" }}
          >
            {/* Animated logo image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="logo"
              src={logo}
              alt="EndlessByte Logo"
            />
          </motion.div>
        </NavLink>
        <motion.div
          className="nav-item ml-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5, type: "spring" }}
        >
          <LanguageSelectorButton />
        </motion.div>
      </div>
      {/* Navigation links */}
      <NavLinks />
    </header>
  );
};

export default Header;