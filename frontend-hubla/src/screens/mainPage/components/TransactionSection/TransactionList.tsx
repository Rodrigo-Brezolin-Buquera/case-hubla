import { Transaction } from "@/api/types";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  list: Transaction[];
}

const TransactionList = ({ list }: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      timeZone: "America/Sao_Paulo",
      dateStyle: "short",
      timeStyle: "short",
    };
    return date.toLocaleString("pt-BR", options as Intl.DateTimeFormatOptions);
  };

  return (
    <Box>
      {list.length ? (
        list.map((i) => {
          return (
            <Box
              key={i.id}
              m={"0.1em"}
              marginBottom={"1em"}
              display={"flex"}
              flexDirection={["column", "row"]}
              gap={"0.5em"}
              justifyContent={"flex-start"}
            >
              <Text> Type:{i.type} </Text>
              <Text> Date: {formatDate(i.date)} </Text>
              <Text> Product: {i.product.toLowerCase()} </Text>
              <Text> Value: {i.value.toString().replace(/^0+/, "")} </Text>
              <Text> Seller: {i.seller.toLowerCase()} </Text>
            </Box>
          );
        })
      ) : (
        <Text>No transactions at the moment</Text>
      )}
    </Box>
  );
};

export default TransactionList;
