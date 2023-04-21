export type Transaction = {
    id: string,
    type: number,
    date: string,
    product: string,
    value: number,
    seller: string
}

export type Seller = {
    id: string,
    name: string,
    type: SellerType,
    balance: number
}

export enum SellerType {
    CREATOR = "CREATOR",
    AFFILIATE = "AFFILIATE"

}