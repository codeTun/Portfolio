import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Represents a button component with hover and tap animations.
 * Displays a name and an arrow icon.
 *
 * @component
 * @param {string} name - The text to display on the button.
 * @param {string} color - The background color of the button.
 * @param {boolean} disabled - Whether the button is disabled.
 */

const Button = ({ name, color, disabled }) => {
  return (
    <motion.button
      className="btn"
      // Apply scale animation on hover
      whileHover={!disabled ? { scale: 1.05 } : {}}
      // Apply scale animation on tap
      whileTap={!disabled ? { scale: 0.99 } : {}}
      style={{
        backgroundColor: color,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
    >
      {/* Display the button name */}
      <p>{name}</p>
      <div>
        {/* Display the arrow icon */}
        <FiArrowUpRight className="arrow-icon" />
      </div>
    </motion.button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};


export default Button;
