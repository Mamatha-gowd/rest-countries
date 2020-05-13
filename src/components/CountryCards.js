import React, { Component } from "react";
import AllCountries from "./AllCountries";
export default class CountryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    let url = "https://restcountries.eu/rest/v2/all";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ countries: res });
      });
  }

  render() {
    const country = this.state.countries.map((country) => {
      return <AllCountries key={country.alpha2Code} country={country} />;
    });
    return <div className="d-flex justify-content-center ">{country}</div>;
  }
}
