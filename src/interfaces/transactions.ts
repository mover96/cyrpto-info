export interface Transactions {
  transactions: Transaction[]
}

export interface Transaction {
  date: Date
  amount: number
  priceUSD: number
}
