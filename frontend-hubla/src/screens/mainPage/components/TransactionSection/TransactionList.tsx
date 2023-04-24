import { Transaction } from "@/api/types";
import React from "react";

interface Props {
    list: Transaction[]
}

const TransactionList = ({list }: Props) => {

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
    <div>
      {list.length &&
        list.map((i) => {
          return (
            <p key={i.id}>
              type:{i.type} 
              Date: {formatDate(i.date)} 
              Product: {i.product.toLowerCase()} 
              Value: {i.value.toString().replace(/^0+/, "")}
              Seller: {(i.seller).toLowerCase()}
            </p>
          );
        })}
    </div>
  );
};

export default TransactionList;
