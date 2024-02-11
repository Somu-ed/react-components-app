import useLocalStorage from "./useLocalStorage";
import './theme.css';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="theme-mode" data-theme={theme}>
      <div className="theme-container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}
