import { useState } from "react";
export default () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
    const main = document.querySelector(".App");
    main.style.transition = "all 0.2s linear";
    localStorage.setItem("theme", theme);
  };
};
