export type Transaction = {
  id: string;
  type: number;
  date: string;
  product: string;
  value: number;
  seller: string;
};

export type Seller = {
  id: string;
  name: string;
  type: SellerType;
  balance: number;
  transactions?: Transaction[];
};

export enum SellerType {
  CREATOR = "Creator",
  AFFILIATE = "Affiliate",
}

export interface IUserLoginDTO {
  email: string;
  password: string;
}

export type User = {
  id: string;
  email: string;
  password: string;
  role: string;
};
