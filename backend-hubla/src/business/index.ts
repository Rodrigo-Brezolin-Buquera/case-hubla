import Database from "../data";
import { CustomError } from "../error/customError";

const database = new Database()

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
}

export default Business;
