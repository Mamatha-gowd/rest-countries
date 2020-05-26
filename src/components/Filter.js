import React from "react";
import {
  Box,
  Flex,
  Icon,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
} from "@chakra-ui/core";

export default function Filter(props) {
  return (
    <Box className="search-container">
      <Box className="search-container-grid">
        <InputGroup w="350px">
          <InputLeftElement
            children={<Icon name="search" size="32px" p={7} />}
          />
          <Input
            onChange={props.searchCountry}
            placeholder="search for a country..."
            size="sm"
          />
        </InputGroup>

        <Box>
          <Select
            isDisabled={false}
            iconSize={6}
            placeholder="Filter by Region"
            onChange={props.filterRegion}
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </Select>
        </Box>
      </Box>
    </Box>
  );
}
