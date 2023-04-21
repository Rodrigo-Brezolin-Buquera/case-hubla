import Database from "../data";
import { CustomError } from "../error/customError";
import fs from "fs";
import { toModelSellers, toModelTransaction } from "./utils";
import { Seller, Transaction } from "../types";

const database = new Database();

class Business {
  public async method() {
    try {
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async insertData(file: Express.Multer.File): Promise<Transaction[]> {
    try {
      let fileContent = await fs.promises.readFile(file.path, "utf8");
      const chunkSize = 86;
      const chunks = fileContent.match(new RegExp(`.{1,${chunkSize}}`, "g"));
      const transactions: Transaction[] = toModelTransaction(chunks);

      const sellers: Seller[] = toModelSellers(transactions);

      for (let seller of sellers) {
        await database.insertSeller(seller);

        const sellerTransactions = transactions.filter(
          (i) => i.seller === seller.name
        );

        seller.balance = sellerTransactions.reduce((acc, cur) => {
          if (cur.type == 3) {
            return acc - Number(cur.value); 
          } else {
            return acc + Number(cur.value);
          }
        }, 0);

        sellerTransactions.forEach(async (transaction) => {
          transaction.seller = seller.id;
          await database.insertTransaction(transaction);
        });

        await database.updateBalance(seller.id, seller.balance);
      }
      return transactions;
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }
  
  
  public async findAllTransactions(): Promise<Transaction[]>  {
    try {
      return await database.findAllTransactions()
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
        );
      }
    }
    
  }
export default Business;
