import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCountries.css";

const CountryData = (props) => {
  const {
    countrycode,
    name,
    flag,
    population,
    region,
    capital,
  } = props.country;
  return (
    <div className="pb-3 w-100">
      <Link to={`/countries/${countrycode}`}>
        <img className="mb-3 w-100 h-100" src={flag} />
        <h2>{name}</h2>
        <p className="population">
          <span>Population:</span>
          {population}
        </p>
        <p className="population">
          <span>Region:</span>
          {region}
        </p>
        <p className="population">
          <span>Capital:</span>
          {capital}
        </p>
      </Link>
    </div>
  );
};

export default CountryData;
