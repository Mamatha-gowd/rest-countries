import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import styles from "./AllCountries.css";

const CountryData = (props) => {
  return (
    <Box width="300px" pb={10} boxShadow="md">
      <img src={props.country.flag} />
      <h2>{props.country.name}</h2>
      <p className="population">
        <span>Population:</span>
        {props.country.population}
      </p>
      <p className="population">
        <span>Region:</span>
        {props.country.region}
      </p>
      <p className="population">
        <span>Capital:</span>
        {props.country.capital}
      </p>
    </Box>
  );
};

export default CountryData;
