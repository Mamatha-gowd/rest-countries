import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import CounrtyData from "./components/CountryData";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/countries/:countryId" component={CounrtyData} />
    </BrowserRouter>
  );
}

export default App;
