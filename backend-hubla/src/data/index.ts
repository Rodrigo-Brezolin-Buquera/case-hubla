import { CustomError } from "../error/customError";
import { Seller, Transaction } from "../types";
import { BaseDatabase } from "./knex";

 class Database extends BaseDatabase {

    private static SELLERS_TABLE: string = "sellers"
    private static TRANSACTIONS_TABLE: string = "transactions"


    public async method(): Promise<void> {
        try {
          
        } catch (error:any) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async insertSeller(input: Seller): Promise<void> {
        try {
           await BaseDatabase.db(Database.SELLERS_TABLE).insert(input)        
        } catch (error:any) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async insertTransaction(input: Transaction): Promise<void> {
        try {
           await BaseDatabase.db(Database.TRANSACTIONS_TABLE).insert(input)        
        } catch (error:any) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async updateBalance(id: string, balance: number): Promise<void> {
        try {
           await BaseDatabase.db(Database.SELLERS_TABLE).update({balance}).where({id})        
        } catch (error:any) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async findAllTransactions(): Promise<Transaction[]> {
        try {
           return await BaseDatabase.db(Database.TRANSACTIONS_TABLE)     
        } catch (error:any) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }




    public toModelUser(obj: any): any {
    }

    public toModelTransaction(obj: any): any {
    }
}

export default Database