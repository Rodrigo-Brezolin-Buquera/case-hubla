
import * as jwt from "jsonwebtoken";
import { IAuthenticator } from "../business/adapters";


export interface AuthenticationData {
    id: string;
    role: string;
  } 

export class Authenticator implements IAuthenticator {

    private JWT_KEY =  "Huble!TokenKey"

    generateToken(input:AuthenticationData  ): string {
       
        const token = jwt.sign(
           input,
            this.JWT_KEY,
            { expiresIn: "1h" }
        )
        return token
    }

    getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, this.JWT_KEY) as any
        const result: AuthenticationData = { id: payload.id, role: payload.role }
        return result
    }
}