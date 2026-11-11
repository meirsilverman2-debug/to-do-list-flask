import { useAtom } from "jotai";
import { themeAtom } from "../../atoms/themeAtom";
import { useEffect } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

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
        {theme === "light" ? <MdLightMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
}
