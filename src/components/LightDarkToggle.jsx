import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

/**
 * Represents a light/dark mode toggle button component.
 *
 * @component
 */

const LightDarkToggle = () => {
  // State to track the current mode (light or dark)
  const [islightMode, setLightMode] = useState(true);

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setLightMode(!islightMode);
  };

  // Original colors

  // eslint-disable-next-line no-unused-expressions
  "--bg-color: #131a22",
    "--bg2-color: #232f3e19",
    "--hl-color: #48a3c6",
    "--hl2-color: #e47911",
    "--text-color: #f3f3f3",
    "--secondary-text-color: #999999",
    "--grey: #9f9f9f76",
    "--spacing: 50px",
    "--sm-spacing: 30px";

  // Apply the selected mode's colors using CSS custom properties
  useEffect(() => {
    const colors = !islightMode
      ? {
          // Light Colors
          "--bg-color": "#ffffff",
          " --bg2-color": "#f0f0f0",
          "--hl-color": "#007acc",
          "--hl2-color": "#ea5b5c",
          "--text-color": "#333333",
          "--secondary-text-color": "#666666",
          "--grey": "#999999",
        }
      : {
          // Dark Colors
          "--bg-color": "#101010",
          "--bg2-color": "#121212",
          "--hl-color": "#48a3c6",
          "--hl2-color": "#ea5b5c",
          "--text-color": "#f3f3f3",
          "--secondary-text-color": "#9f9f9f",
          "--grey": "#9f9f9f76",
        };

    for (const property in colors) {
      const value = colors[property];
      document.documentElement.style.setProperty(property, value);
    }
  }, [islightMode]);

  return (
    <button
      className="toggleMode mt-0"
      onClick={toggleMode}
      style={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "50px",
        height: "50px",
        right: "0",
        top: "24px",
      }}
    >
      {islightMode ? (
        <CiLight className="toggleIcon" />
      ) : (
        <MdDarkMode className="toggleIcon" />
      )}
    </button>
  );
};

export default LightDarkToggle;
