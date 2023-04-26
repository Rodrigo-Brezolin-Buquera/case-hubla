import { findSellerById, findSellers } from "@/api";
import { Seller } from "@/api/types";
import TextContainer from "@/styles/TextContainer";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";


interface Props {
  sellers: Seller[]
}

const SellerSelection = ({sellers}:Props) => {
  const [sellerDetails, setSellerDetails] = useState<Seller | undefined>(
    undefined
  );

 
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    findSellerById(event.target.value, setSellerDetails);
  };

  const formatBalance = (value: number) => {
    return value && "R$ " + (value / 100).toString().replace(".", ",");
  };

  return (
    <>
      {sellers.length ? (
        <TextContainer>
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
            alignItems={"center"}
            width={"100%"}
          >
            {sellerDetails && (
              <>
                <Text>Type: {sellerDetails.type}</Text>
                <Text> Balance: {formatBalance(sellerDetails.balance)}</Text>
              </>
            )}
          </Box>
        </TextContainer>
      ) : null}
    </>
  );
};

export default SellerSelection;
