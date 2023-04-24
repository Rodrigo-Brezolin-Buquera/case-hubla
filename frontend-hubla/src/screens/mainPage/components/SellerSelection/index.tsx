import { findSellerById, findSellers } from "@/api";
import { Seller } from "@/api/types";
import TextContainer from "@/styles/TextContainer";
import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const SellerSelection = () => {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [sellerDetails, setSellerDetails] = useState<Seller | undefined>(
    undefined
  );

  useEffect(() => {
    findSellers(setSellers);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    findSellerById(event.target.value, setSellerDetails);
  };

  const formatBalance = (value: number) => {
    return value && "R$ " + (value / 100).toString().replace(".", ",");
  };

  return (
    <TextContainer>
      {sellers?.length > 0 && (
        <>
          <Text> Select a seller to see the balance </Text>
          <select placeholder="Sellers" onChange={handleChange}>
            <option key={0} value={""}>
              Sellers
            </option>

            {sellers?.length &&
              sellers.map((i) => {
                return (
                  <option key={i.id} value={i.id}>
                    {i.name}
                  </option>
                );
              })}
          </select>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"0.5em"}
            justifyContent={"flex-start"}
            width={"100%"}
            paddingLeft={"160px"}
          >
            {sellerDetails && (
              <>
                <Text>Type: {sellerDetails.type}</Text>
                <Text> Balance: {formatBalance(sellerDetails.balance)}</Text>
              </>
            )}
          </Box>
        </>
      )}
    </TextContainer>
  );
};

export default SellerSelection;
