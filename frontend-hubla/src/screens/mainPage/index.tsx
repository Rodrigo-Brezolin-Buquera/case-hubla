import { Box, Text } from "@chakra-ui/react";
import FileUpload from "./components/FileUpload";
import SellerSelection from "./components/SellerSelection";
import TransactionSection from "./components/TransactionSection";

const MainPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"top"}
      backgroundColor={"gray.100"}
      height={"100%"}
      minH={"100vh"}
      gap={"1em"}
    >
      <Box
        backgroundColor={"green.200"}
        w={"100%"}
        h={"70px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
       <Text fontSize={"xl"}>FullStack Chalange - Hubla! - Develop by Rodrigo Brezolin Buquera</Text> 
      </Box>

      <FileUpload />
      <SellerSelection />
      <TransactionSection />
    </Box>
  );
};

export default MainPage;
