import React from "react";
import { MainContext, useContext } from "./context";

const ThemeSwitcher = () => {
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const { setTheme, theme } = useContext(MainContext);

  return (
    <div style={{marginLeft:10}}>
      <button onClick={changeTheme}>Switch theme</button>
    </div>
  );
};

export default ThemeSwitcher;
