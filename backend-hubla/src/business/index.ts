import { CustomError } from "../error/customError";
import fs from "fs";
import {
  deleteTempFile,
  normalizeData,
  toModelSellers,
  toModelTransaction,
} from "./utils";
import { Seller, Transaction } from "../types";
import { Repository } from "./Repository";

class Business {
  constructor(
    private database: Repository,
    private deleteTempFile: (filePath: string) => void
  ) {}

  public async insertData(file: Express.Multer.File): Promise<Transaction[]> {
    try {
      const [chunks, fileContent] = await normalizeData(file);
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

        this.deleteTempFile(file.path);
      }
      return fileContent;
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
      if (!id) {
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
