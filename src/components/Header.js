import React, { useEffect, useState } from "react";
import Logo from "../assets/icon.png";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("taskItTheme")) || "dark"
  );
  const [todoAuth, setTodoAuth] = useState(
    JSON.parse(localStorage.getItem("todoAuth")) || false
  );
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("todoAuth", JSON.stringify(true));
      localStorage.setItem("userInfo", JSON.stringify(result));
      setTodoAuth(true);
      console.log(result);
      window.location.reload();
    });
  };
  const handleLogOut = () => {
    signOut(auth);
    localStorage.setItem("todoAuth", JSON.stringify(false));
    localStorage.setItem("userInfo", JSON.stringify(null));

    setTodoAuth(false);
    window.location.reload();
  };

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
      {todoAuth ? (
        <div onClick={handleLogOut}>
          <span className="login">LogOut</span>
          <span>Guest</span>
        </div>
      ) : (
        <div onClick={handleLogin} className="login">
          Login
        </div>
      )}
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
