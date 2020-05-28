import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Button, Image, Heading, Tag, Stack } from "@chakra-ui/core";
import { searchCountries } from "../Actions/searchCountryAction";
class CountryData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryId: this.props.match.params.countryId,
    };
  }

  componentDidMount() {
    this.props.searchCountries(this.state.countryId);
  }

  render() {
    const country = this.props.country;
    console.log(this.state.countryId);
    return (
      <Box>
        <Link to="/">
          <Button
            size="md"
            _focus="none"
            variant="ghost"
            _hover="none"
            p={12}
            ml={6}
            mb="20px"
            leftIcon="arrow-back"
          >
            Back
          </Button>
        </Link>
        <Box className="country-information-grid">
          <Box>
            <Image p={[null, null, 10]} src={country.flag} />
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
                <Box mt="30px" mb="10px">
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Border Countries:
                    </span>{" "}
                  </p>
                  <Stack mt="10px" isInline spacing={6} flexWrap="wrap">
                    {country.borders && country.borders.length !== 0 ? (
                      country.borders.map((border) => (
                        <Box mt="15px">
                          <Link to={`/countries/${border}`}>
                            <Tag key={border} variantColor="gray">
                              {border}
                            </Tag>
                          </Link>
                        </Box>
                      ))
                    ) : (
                      <h5>None</h5>
                    )}
                  </Stack>
                </Box>
              </Box>
              <Box>
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

const mapStateToProps = (state) => ({
  country: state.searchCountryReducer.country,
});
export default connect(mapStateToProps, { searchCountries })(CountryData);
