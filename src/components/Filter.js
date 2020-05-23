import React from "react";
import { Box, Flex, Icon, Input, Select } from "@chakra-ui/core";

export default function Filter(props) {
  return (
    <Box className="search-container">
      <Box className="search-container-grid">
        <Flex width="350px" borderRadius="10px" boxShadow="sm" p={2}>
          <Icon name="search" size="32px" p={7} />
          <Input
            placeholder="search for a country..."
            size="sm"
            onChange={props.searchCountry}
            border="0"
          ></Input>
        </Flex>
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
