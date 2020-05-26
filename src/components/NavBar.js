import React from "react";
import { Box, Icon, Heading, Button } from "@chakra-ui/core";

const NavBar = (props) => {
  const mode = props.theme ? "Light Mode" : "Dark Mode";
  return (
    <Box className="header" boxShadow="sm">
      <Heading size="lg" p={10}>
        Where in the world?
      </Heading>
      <Box
        as="flex"
        alignSelf="center"
        mr={[null, null, "100px"]}
        mt={["-25px", "2px", "2px"]}
        ml={["30px", null, "50px"]}
      >
        {/* <Icon name="moon" p={3}></Icon> */}
        <Icon name="moon"></Icon>
        <Button
          size="sm"
          _focus="none"
          variant="ghost"
          _hover="none"
          onClick={props.handleTheme}
        >
          {mode}
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
