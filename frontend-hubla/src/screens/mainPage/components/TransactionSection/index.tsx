import { findTransactions } from "@/api";
import { Transaction } from "@/api/types";
import { Button, Card } from "@chakra-ui/react";
import React, { useState } from "react";
import TransactionList from "./TransactionList";

const TransactionSection = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showList, setShowList] = useState(false);

  const onClick = () => {
    setShowList(!showList);
    if (showList) return null;
    findTransactions(setTransactions);
  };

  return (
    <Card
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"top"}
      minW={"90vw"}
      p={"1em"}
      gap={"0.1em"}
      m={"0.8em"}
    >
      <Button onClick={onClick} backgroundColor={"green.100"}>
        {" "}
        {showList ? "Hide" : "Show"} transactions
      </Button>

      {showList && <TransactionList list={transactions} />}
    </Card>
  );
};

export default TransactionSection;
