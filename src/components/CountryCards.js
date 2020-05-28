import React, { Component } from "react";
import { connect } from "react-redux";
import { getCountries } from "../Actions/getCountriesAction";
import { getCountriesByRegion } from "../Actions/filterCountriesAction";
import AllCountries from "./AllCountries";
import Filter from "./Filter";
import { Box } from "@chakra-ui/core";
class CountryCards extends Component {
  state = {
    isFiltered: false,
    search: [],
  };

  componentDidMount() {
    this.props.getCountries();
  }

  searchCountry = (e) => {
    if (e.target.value === "") {
      this.setState({ isFiltered: false });
    } else {
      this.setState({ isFiltered: true });
      const search = this.props.countries.filter((country) => {
        const regex = new RegExp(e.target.value, "gi");
        return country.name.match(regex);
      });
      this.setState({ search: search });
    }
  };

  filterRegion = (e) => {
    if (e.target.value === "all") {
      this.props.getCountries();
    } else {
      this.props.getCountriesByRegion(e.target.value);
    }
  };

  render() {
    const { isFiltered } = this.state;
    console.log(this.props.filteredCountries);
    return (
      <Box>
        <Filter
          searchCountry={this.searchCountry}
          filterRegion={this.filterRegion}
        />
        <Box className="all-countries">
          {isFiltered
            ? this.state.search.map((filteredCountry) => (
                <Box key={filteredCountry.alpha3Code}>
                  <AllCountries country={filteredCountry} />
                </Box>
              ))
            : this.props.countries.map((country) => (
                <Box key={country.alpha3Code}>
                  <AllCountries country={country} />
                </Box>
              ))}
        </Box>
      </Box>
    );
  }
}
const mapStateToProps = (state) => ({
  countries: state.countryReducer.countries,
  filteredCountries: state.countryReducer.filteredCountries,
});
export default connect(mapStateToProps, {
  getCountries,
  getCountriesByRegion,
})(CountryCards);
