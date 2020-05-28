import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import { Box } from "@chakra-ui/core";
import CounrtyData from "./components/CountryData";
import CountryCards from "./components/CountryCards";
import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <Box className={theme ? "dark" : "light"}>
      <NavBar theme={theme} handleTheme={handleTheme} />
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={CountryCards} />
          <Route
            path="/countries/:countryId"
            render={(props) => (
              <CounrtyData {...props} key={props.match.params.countryId} />
            )}
          />
        </BrowserRouter>
      </Provider>
    </Box>
  );
};

export default App;
