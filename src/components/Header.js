import React, { useEffect, useState } from "react";
import Logo from "../assets/icon.png";
const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("taskItTheme")) || "dark"
  );
  useEffect(() => {
    localStorage.setItem("taskItTheme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        Task-It
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"}
        />
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium activeTheme" : "medium"}
        />
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark activeTheme" : "dark"}
        />
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
        />
        <span
          onClick={() => setTheme("gTwo")}
          className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
        />
        <span
          onClick={() => setTheme("gThree")}
          className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
        />
      </div>
    </header>
  );
};

export default Header;
