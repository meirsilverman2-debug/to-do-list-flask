import { useAtom } from "jotai";
import { themeAtom } from "../../atoms/themeAtom";
import { useEffect } from "react";

export default function ThemeCss() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}
