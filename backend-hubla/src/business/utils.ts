import { CustomError } from "../error/customError";
import { generateId } from "../services/idGenerator";
import { Seller, SellerType, Transaction } from "../types";
import fs from "fs";


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
      if(output[name] === null || output[name] === undefined || output[name] === "" ) {
        throw new CustomError("Incorrect file format", 406)
      }
    }
    output.product = output.product.toLowerCase()
    output.seller = output.seller.toLowerCase()
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

  const result: Seller[] = Object.values(reducedTransactions).map((i: any) => {
    if (i.type.includes("1")) {
      i.type = SellerType.CREATOR;
    } else if (i.type.includes("2")) {
      i.type = SellerType.AFFILIATE;
    } else {
      throw new CustomError("Invalid seller type", 400)
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

export const normalizeData = async (file: Express.Multer.File): Promise<any[]> => {
      let fileContent = await fs.promises.readFile(file.path, "utf8");
      if(!fileContent){
        throw new CustomError("Error reading the file", 400)
      }  
      const chunkSize = 86;
      const chunks = fileContent.match(new RegExp(`.{1,${chunkSize}}`, "g"));
      if(!chunks){
        throw new CustomError("Error reading the file", 400)
      }

      return chunks
}

