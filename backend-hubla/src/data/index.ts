import { CustomError } from "../error/customError";
import { BaseDatabase } from "./knex";

 class Database extends BaseDatabase {

    public static SELLERS_TABLE: string = "sellers"
    public static TRANSACTIONS_TABLE: string = "transactions"


    public async method(): Promise<void> {
        try {
          
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