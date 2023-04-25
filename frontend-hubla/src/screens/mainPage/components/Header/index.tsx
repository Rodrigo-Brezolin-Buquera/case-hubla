import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const logout = async () => {
    localStorage.removeItem("token");
    await router.push("/");
  };

  return (
    <Box
      backgroundColor={"green.200"}
      w={"100%"}
      h={"70px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Text fontSize={"xl"}>
        FullStack Challenge - Hubla! - Develop by Rodrigo Brezolin Buquera
      </Text>
      <Button
        backgroundColor={"green.100"}
        position={"absolute"}
        right={1}
        onClick={logout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Header;
