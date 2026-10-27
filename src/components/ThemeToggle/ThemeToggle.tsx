import { useTheme } from "../../hooks/useTheme";
import Icon from "../Icon";
import "./ThemeToggle.scss";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Attiva tema chiaro" : "Attiva tema scuro"}
      title={theme === "dark" ? "Tema chiaro" : "Tema scuro"}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size="md" />
    </button>
  );
}

export default ThemeToggle;
