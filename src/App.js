import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import { Box } from "@chakra-ui/core";
import CounrtyData from "./components/CountryData";
import CountryCards from "./components/CountryCards";
import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <Box className={theme ? "dark" : "light"}>
      <ThemeProvider>
        <CSSReset />
        <NavBar theme={theme} handleTheme={handleTheme} />
        <BrowserRouter>
          <Route exact path="/" component={CountryCards} />
          <Route
            path="/countries/:countryId"
            render={(props) => (
              <CounrtyData {...props} key={props.match.params.countryId} />
            )}
          />
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
};

export default App;
