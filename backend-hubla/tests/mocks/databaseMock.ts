import { Repository } from "../../src/business/Repository";
import { Seller, SellerType, Transaction, User } from "../../src/types";

export class DatabaseMock implements Repository {
   
    public insertSeller = jest.fn(async (input: Seller): Promise<void> => {});
    public insertTransaction = jest.fn(async (input: Transaction): Promise<void> => {})
    public updateBalance = jest.fn( async (id: string, balance: number): Promise<void> => {} );
    public findAllTransactions = jest.fn(async (): Promise<Transaction[]> => {
      return [
        {
          id: "id",
          type: 1,
          date: "Date",
          product: "Description",
          value: 0,
          seller: "sellerId",
        },
        {
          id: "id2",
          type: 2,
          date: "Date",
          product: "Description",
          value: 0,
          seller: "sellerId",
        },
      ];
    });
    public findSeller = jest.fn(async (id: string): Promise<Seller> => {
      return id === "id"
        ? {
            id: "id",
            name: "name",
            type: SellerType.AFFILIATE,
            balance: 0,
            transactions: [],
          }
        : (null as any);
    });
    public findAllSellers = jest.fn(async (): Promise<Seller[]> => {
      return [
        {
          id: "id",
          name: "name",
          type: SellerType.AFFILIATE,
          balance: 0,
          transactions: [],
        },
        {
          id: "id",
          name: "name",
          type: SellerType.CREATOR,
          balance: 0,
          transactions: [],
        },
      ];
    });
     public findUserByEmail  = jest.fn(async (email: string): Promise<User> => {
       return {id: "id", email:"email@email.com.br", password:"123456", role: "Admin"}
    })
  }