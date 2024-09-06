export interface IAccount {
  title: string,
  clean_title: string,
  current_balance: number,
  initial_balance: number,
  created_at: string,
  updated_at: string | null,
}

export interface ICreateAccount {
  title: string,
  initial_balance: number,
  type: number,
}

export enum AccountTypeEnum {
  CARD = 1,
  CASH = 2,
  ACCOUNT = 3,
  CREDIT = 4
}
