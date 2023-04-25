import { findSellers } from "@/api";
import { Seller, Transaction } from "@/api/types";
import { useProtectedPage } from "@/hooks/useProtectedPage";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";
import SellerSelection from "./components/SellerSelection";
import TransactionSection from "./components/TransactionSection";

const MainPage = () => {
  useProtectedPage()
  const [response, setResponse] = useState<Transaction[] | string>();
  const [sellers, setSellers] = useState<Seller[]>([]);

  useEffect(()=>{
    findSellers(setSellers);
  },[response])

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
      <Header/>
      <FileUpload response={response} setResponse={setResponse} />
      <SellerSelection sellers={sellers} />
      <TransactionSection />
    </Box>
  );
};

export default MainPage;
