import { findSellers } from "@/api";
import { Seller, Transaction } from "@/api/types";
import { useProtectedPage } from "@/hooks/useProtectedPage";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FileUpload from "./components/FileUpload";
import SellerSelection from "./components/SellerSelection";
import TransactionSection from "./components/TransactionSection";

const MainPage = () => {
  useProtectedPage()
  const [response, setResponse] = useState<Transaction[] | string>();
  const [sellers, setSellers] = useState<Seller[]>([]);
  const router = useRouter()
  useEffect(()=>{
    findSellers(setSellers);
  },[response])

  const logout = async () =>{
    localStorage.removeItem("token")
    await router.push("/")
  }

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
        position={"relative"}
      >
       <Text fontSize={"xl"}>FullStack Challenge - Hubla! - Develop by Rodrigo Brezolin Buquera</Text> 
        <Button 
         backgroundColor={"green.100"  } 
        position={"absolute"}
         right={1} 
         onClick={logout}
        >
          Logout
        </Button>
      </Box>

      <FileUpload response={response} setResponse={setResponse} />
      <SellerSelection sellers={sellers} />
      <TransactionSection />
    </Box>
  );
};

export default MainPage;
