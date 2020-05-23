import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/core";

const CountryData = (props) => {
  return (
    <Box mt={2}>
      <Link to={`/countries/${props.country.alpha3Code}`}>
        <Box maxW="350px" boxShadow="lg" borderRadius="10px">
          <Image src={props.country.flag} />
          <Box p={2}>
            <Box alignItems="baseline">
              <Box style={{ fontWeight: "bold" }}>
                <h1>{props.country.name}</h1>
              </Box>
              <Box mt={1}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Population: </span>{" "}
                  {props.country.population}
                </p>
              </Box>
              <Box mt={1}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Ragion:</span>{" "}
                  {props.country.region}
                </p>
              </Box>
              <Box mt={1}>
                <p>
                  <span style={{ fontWeight: "bold" }}>Capital:</span>{" "}
                  {props.country.capital}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default CountryData;
