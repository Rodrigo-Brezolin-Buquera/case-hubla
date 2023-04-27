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
    type: string,
    balance: number,
    transactions?: Transaction[]
}

export type TLoginForm = {
    email: string,
    password: string
}