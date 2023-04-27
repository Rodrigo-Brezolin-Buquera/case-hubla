import { Seller, Transaction, User } from "../types";

export interface Repository {
  insertSeller(input: Seller): Promise<void>;
  insertTransaction(input: Transaction): Promise<void>;
  updateBalance(id: string, balance: number): Promise<void>;
  findAllTransactions(): Promise<Transaction[]>;
  findSeller(id: string): Promise<Seller>;
  findAllSellers(): Promise<Seller[]>;
  findUserByEmail(email: string): Promise<User>;
}
