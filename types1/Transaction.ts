export interface ITransaction {
  account_id: number,
  type: string,
  amount: number,
  created_at: string,
  updated_at: string | null,
}

export interface ICreateTransaction {
  account_id: number,
  type: number,
  amount: number,
}

export enum TransactionTypeEnum {
  EXPENSE = 1,
  INCOME = 2,
  TRANSFER = 3
}
