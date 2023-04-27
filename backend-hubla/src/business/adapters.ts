import { AuthenticationData } from "../services/Authenticator"

export interface IAuthenticator {
    generateToken(input:AuthenticationData  ): string       
    getData(token: string): AuthenticationData 
}

export interface IHashManager {
     generateHash(s:string):Promise<string> 
     verifyHash(s:string, hash: string):Promise<boolean>
}