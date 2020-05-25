import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Image, Heading, Grid, Flex } from "@chakra-ui/core";
import { getCountry } from "./API";
export default class CountryData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
      countryId: this.props.match.params.countryId,
    };
  }

  componentDidMount() {
    getCountry(this.state.countryId).then((res) => {
      this.setState({ country: res });
    });
  }

  render() {
    const country = this.state.country;

    console.log(this.state.countryId);
    return (
      <Box style={{ marginTop: "25px" }}>
        <Link to="/">
          <Button
            p={5}
            ml={6}
            mb="20px"
            borderRadius="5px"
            leftIcon="arrow-back"
          >
            Back
          </Button>
        </Link>
        <Box className="country-information-grid">
          <Box maxH="500px">
            <Image src={country.flag} />
          </Box>
          <Box>
            <Heading>{country.name}</Heading>
            <Box className="information-grid">
              <Box>
                <p>
                  <span style={{ fontWeight: "bold" }}>Native Name: </span>{" "}
                  {country.nativeName}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Population: </span>{" "}
                  {country.population &&
                    country.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Region: </span>{" "}
                  {country.region}
                </p>

                <p>
                  <span style={{ fontWeight: "bold" }}>Sub region: </span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Capital: </span>{" "}
                  {country.capital}
                </p>
                <Box mt="30px">
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Border Countries:
                    </span>{" "}
                  </p>
                  {country.borders && country.borders.length !== 0 ? (
                    country.borders.map((border) => (
                      <Box
                        display="inline"
                        ml="15px"
                        key={border}
                        boxShadow="md"
                        style={{ width: "50px" }}
                      >
                        <Link to={`/countries/${border}`}>{border}</Link>
                      </Box>
                    ))
                  ) : (
                    <h5>None</h5>
                  )}
                </Box>
              </Box>
              <Box mt="20px">
                <p>
                  <span style={{ fontWeight: "bold" }}>Top Level Domain:</span>
                  {country.topLevelDomain}
                </p>
                <p>
                  <span>Currencies:</span>
                </p>
                {country.currency && country.currencies.length !== 0 ? (
                  country.currencies.map((currency) => currency.name).join(", ")
                ) : (
                  <h3>None</h3>
                )}

                <p>
                  <span>Languages:</span>{" "}
                </p>
                {country.languages && country.languages.length !== 0 ? (
                  country.languages.map((language) => language.name).join(", ")
                ) : (
                  <h3>None</h3>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
