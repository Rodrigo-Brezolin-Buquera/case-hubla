import { CustomError } from "../error/customError";
import fs from "fs";
import { toModelSellers, toModelTransaction } from "./utils";
import { Seller, Transaction } from "../types";
import { Repository } from "./Repository";

class Business {
  constructor(private database: Repository) {}

  public async insertData(file: Express.Multer.File): Promise<Transaction[]> {
    try {
      let fileContent = await fs.promises.readFile(file.path, "utf8");
      if(!fileContent){
        throw new CustomError("Error reading the file", 400)
      }  
      
      const chunkSize = 86;
      const chunks = fileContent.match(new RegExp(`.{1,${chunkSize}}`, "g"));
      if(!chunks){
        throw new CustomError("Error reading the file", 400)
      }
      if(chunks[chunks.length -1].length !==chunkSize) {
        throw new CustomError("Incorrect file format", 406)
      }

      const transactions: Transaction[] = toModelTransaction(chunks);
      const sellers: Seller[] = toModelSellers(transactions);

      for (let seller of sellers) {
        await this.database.insertSeller(seller);

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
          await this.database.insertTransaction(transaction);
        });

        await this.database.updateBalance(seller.id, seller.balance);
      }
      return transactions;
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async findAllTransactions(): Promise<Transaction[]> {
    try {
      return await this.database.findAllTransactions();
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async findAllSellers(): Promise<Seller[]> {
    try {
      return await this.database.findAllSellers();
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async findSeller(id: string): Promise<Seller> {
    try {
      if(!id){
        throw new CustomError("Please select an id", 400);
      }

      const seller = await this.database.findSeller(id);

      if (!seller) {
        throw new CustomError("Sellers not found", 404);
      }

      return seller;
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }
}
export default Business;
