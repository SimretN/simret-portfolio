import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
      className="
        absolute
        top-4
        right-4
        z-50
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-gray-200
        bg-white
        text-gray-700
        shadow-md
        transition
        hover:border-purple-500
        hover:text-purple-600

        sm:top-5
        sm:right-8
      "
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
