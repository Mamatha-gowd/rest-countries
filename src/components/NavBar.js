import React from "react";
import { Box, Icon, Heading, Button } from "@chakra-ui/core";

const NavBar = (props) => {
  const mode = props.theme ? "Light Mode" : "Dark Mode";
  return (
    <Box className="header" as="nav" boxShadow="sm">
      <Heading size="lg" p={10}>
        Where in the world?
      </Heading>
      <Box mt={8}>
        {/* <Icon name="moon" p={3}></Icon> */}
        <Icon name="moon"></Icon>
        <Button onClick={props.handleTheme}>{mode}</Button>
      </Box>
    </Box>
  );
};

export default NavBar;
