import ThemeContext from "../contexts/ThemeContext.js";
import { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ToggleTheme() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  if (theme === "light")
    return (
      <a type="button" onClick={toggleTheme} style={{ cursor: "pointer" }}>
        <MdDarkMode size="2em" />
      </a>
    );
  else
    return (
      <a type="button" onClick={toggleTheme} style={{ cursor: "pointer" }}>
        <MdLightMode size="2em" />
      </a>
    );
}

export default ToggleTheme;
