import { Box } from "@chakra-ui/react";
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
      paddingTop={"1em"}
    >
      <FileUpload />
      <TransactionSection />
      <SellerSelection />
    </Box>
  );
};

export default MainPage;
