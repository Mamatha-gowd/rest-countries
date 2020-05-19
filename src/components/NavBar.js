import React from "react";
import { Icon, Heading, Flex, Button } from "@chakra-ui/core";

const NavBar = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="black"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Where in the world
        </Heading>
      </Flex>
      {/* <Icon name="moon" p={3}></Icon> */}
      <Icon name="moon" boolean="false" ml="70%"></Icon>
      <Button onClick={props.handleTheme}>Dark mode</Button>
    </Flex>
  );
};

export default NavBar;
