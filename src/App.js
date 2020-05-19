import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Box } from "@chakra-ui/core";
import Home from "./components/Home";
import CounrtyData from "./components/CountryData";
import "./App.css";
import NavBar from "./components/NavBar";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
};

function App() {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
    const main = document.querySelector(".App");
    main.style.transition = "all 0.2s linear";
    localStorage.setItem("theme", theme);
  };
  return (
    <Box
      className={`App ${
        localStorage.getItem("theme") === "true" ? "dark-mode" : "light-mode"
      }`}
    >
      <ThemeProvider theme={newTheme}>
        <CSSReset />
        <NavBar handleTheme={handleTheme} />

        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/countries/:countryId" component={CounrtyData} />
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
