import React, { Component } from "react";
import AllCountries from "./AllCountries";
import Filter from "./Filter";
import { getCountries, getCountriesByRegion } from "./API";
import { Box } from "@chakra-ui/core";
export default class CountryCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isFiltered: false,
      filteredCountries: [],
    };
  }

  componentDidMount() {
    getCountries().then((res) => {
      this.setState({ countries: res });
    });
  }

  searchCountry = (e) => {
    if (e.target.value === "") {
      this.setState({ isFiltered: false });
    } else {
      this.setState({ isFiltered: true });
      const filteredCountries = this.state.countries.filter((country) => {
        const regex = new RegExp(e.target.value, "gi");
        return country.name.match(regex);
      });
      this.setState({ filteredCountries: filteredCountries });
    }
  };

  filterRegion = (e) => {
    if (e.target.value === "all") {
      getCountries().then((res) => {
        this.setState({ countries: res });
      });
    } else {
      getCountriesByRegion(e.target.value).then((res) => {
        this.setState({ countries: res });
      });
    }
  };

  render() {
    const { countries, isFiltered, filteredCountries } = this.state;

    return (
      <Box>
        <Filter
          searchCountry={this.searchCountry}
          filterRegion={this.filterRegion}
        />
        <Box className="all-countries">
          {isFiltered
            ? filteredCountries.map((filteredCountry) => (
                <Box key={filteredCountry.alpha3Code}>
                  <AllCountries country={filteredCountry} />
                </Box>
              ))
            : countries.map((country) => (
                <Box key={country.alpha3Code}>
                  <AllCountries country={country} />
                </Box>
              ))}
        </Box>
      </Box>
    );
  }
}
