import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCountries.css";

const CountryData = (props) => {
  return (
    <div className="pb-3 w-100">
      <Link to={`/countries/${props.country.countrycode}`}>
        <img className="mb-3 w-100 h-100" src={props.country.flag} />
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
      </Link>
    </div>
  );
};

export default CountryData;
