import { CustomError } from "../error/customError";
import { Seller, Transaction } from "../types";
import { BaseDatabase } from "./knex";

class Database extends BaseDatabase {
  private static SELLERS_TABLE: string = "sellers";
  private static TRANSACTIONS_TABLE: string = "transactions";

  public async method(): Promise<void> {
    try {
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async insertSeller(input: Seller): Promise<void> {
    try {
      await BaseDatabase.db(Database.SELLERS_TABLE).insert(input);
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async insertTransaction(input: Transaction): Promise<void> {
    try {
      await BaseDatabase.db(Database.TRANSACTIONS_TABLE).insert(input);
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async updateBalance(id: string, balance: number): Promise<void> {
    try {
      await BaseDatabase.db(Database.SELLERS_TABLE)
        .update({ balance })
        .where({ id });
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async findAllTransactions(): Promise<Transaction[]> {
    try {
      return await BaseDatabase.db(Database.TRANSACTIONS_TABLE);
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  public async findSeller(id: string): Promise<Seller> { //////////////// tirar esse any
    try {
      const result = await BaseDatabase.db(Database.SELLERS_TABLE)
        .select(
          "sellers.id AS sellerId",
          "name",
          "sellers.type AS sellerType",
          "balance",
          "transactions.id AS transactionId",
          "transactions.type AS transactionType",
          "date",
          "product",
          "value"
        )
        .join(
          Database.TRANSACTIONS_TABLE,
          "sellers.id",
          "=",
          "transactions.seller"
        )
        .where("sellers.id", "=", id);
      return this.toModelSeller(result);
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }

  private toModelSeller(arr: any): Seller {
    return {
        id: arr[0].sellerId,
        name: arr[0].name,
        type: arr[0].sellerType,
        balance: arr[0].balance,
        transactions: arr.map((i:any)=> {
            return {
                id: i.transactionId,
                type: i.transactionType,
                date: i.date,
                product: i.product,
                value: i.value
            }
        })
    }
  }

}

export default Database;
