import { generateId } from "../services/idGenerator";
import { Seller, SellerType, Transaction } from "../types";

export const toModelTransaction = (chunks: any): Transaction[] => {
  return chunks?.map((chunk: any) => {
    const fields = [
      { name: "type", start: 0, end: 0 },
      { name: "date", start: 1, end: 25 },
      { name: "product", start: 26, end: 55 },
      { name: "value", start: 56, end: 65 },
      { name: "seller", start: 66, end: 85 },
    ];
    const output: any = {};
    for (const field of fields) {
      const { name, start, end } = field;
      const value = chunk.slice(start, end + 1).trim();
      output[name] = value;
    }
    output.value = output.value.replace(/^0+/, "");
    output.id = generateId()
    return output;
  });
};

export const toModelSellers = (transactions: Transaction[]): Seller[] => {
  const reducedTransactions = transactions.reduce((acc: any, cur: any) => {
    const sellerName = cur.seller;
    const sellerType = cur.type;


    if (!acc[sellerName]) {
      acc[sellerName] = { seller: sellerName, type: sellerType };
    } else if (!acc[sellerName].type.includes(sellerType)) {
      acc[sellerName].type += `, ${sellerType}`;
    }

    return acc;
  }, {});

  const result = Object.values(reducedTransactions).map((i: any) => {
    if (i.type.includes("1")) {
      i.type = SellerType.CREATOR;
    } else if (i.type.includes("2")) {
      i.type = SellerType.AFFILIATE;
    }
    return {
      id: generateId(),
      name: i.seller,
      type: i.type,
      balance: 0,
    };
  });
  return result;
};
