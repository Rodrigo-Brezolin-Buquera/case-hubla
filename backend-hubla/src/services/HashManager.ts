import * as bcrypt from "bcryptjs";
import { IHashManager } from "../business/adapters";

export class HashManager  implements IHashManager{
    async generateHash(s:string):Promise<string> {
        const salt = await bcrypt.genSalt(12)
        const result = await bcrypt.hash(s, salt)
        return result
    }

    async verifyHash(s:string, hash: string):Promise<boolean>  {
        return bcrypt.compare(s, hash)
    }
}