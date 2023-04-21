import Database from "../data";
import { CustomError } from "../error/customError";
import fs from "fs";
import { toModelTransaction } from "./utils";
import { Transaction } from "../types";

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

  public async insertData(file: Express.Multer.File) {
    try {
      let fileContent = await fs.promises.readFile(file.path, "utf8");
      const chunkSize = 86;
      const chunks = fileContent.match(new RegExp(`.{1,${chunkSize}}`, "g"));
      const transactions:Transaction[] = toModelTransaction(chunks)

      console.log(transactions);
    } catch (error: any) {
      throw new CustomError(
        error.sqlMessage || error.message,
        error.statusCode || 400
      );
    }
  }
}

export default Business;
