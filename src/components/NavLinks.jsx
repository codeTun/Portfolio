import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LightDarkToggle from "./LightDarkToggle";
import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import DownloadResumeButton from "../components/DownloadResumeButton";
import LanguageSelectorButton from "./LanguageSelectorButton";

const NavLinks = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Menu toggle button */}
      <button
        className="dropdown-toggle mr-5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      {/* Light/Dark mode toggle */}
      <LightDarkToggle />
      

      <div className="hidden md:block">
        <DownloadResumeButton />
      </div>
      {/* Navigation links */}
      <nav className={`links ${isMenuOpen ? "open" : "closed"} mr-3`}>
        <motion.div
          className="nav-item"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
        >
          {/* Home link */}
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </motion.div>

        <motion.div
          className="nav-item"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.5, type: "spring" }}
        >
          {/* About link */}
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
        </motion.div>

        <motion.div
          className="nav-item"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
        >
          {/* Portfolio link */}
          <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
            Projects
          </NavLink>
        </motion.div>

        <motion.div
          className="nav-item"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5, type: "spring" }}
        >
          {/* Contact link */}
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </motion.div>


        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <DownloadResumeButton />
        </div>
      </nav>
        
    </>
  );
};

export default NavLinks;
