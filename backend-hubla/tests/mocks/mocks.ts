import { IAuthenticator, IHashManager } from "../../src/business/adapters";
import { AuthenticationData } from "../../src/services/Authenticator";

export const deleteTempFileMock = (filePath: string) => {};

export class HashManagerMock implements IHashManager {
   generateHash = jest.fn(async(s: string): Promise<string> => {
    return "hashPassword";
  })

  verifyHash = jest.fn(async(s: string, hash: string): Promise<boolean> => {
    return s === hash;
  })
}

export class AuthenticatorMock implements IAuthenticator {
  generateToken = jest.fn((input: AuthenticationData): string => {
    return "token";
  })

  getData  = jest.fn((token: string): AuthenticationData => {
    return { id: "123234235", role: "Admin" };
  })
}
