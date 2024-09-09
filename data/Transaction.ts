import { TransactionTypeEnum } from '~/types1/Transaction'

export const TransactionTypes = [
  {
    label: 'Расход',
    value: TransactionTypeEnum.EXPENSE,
  },
  {
    label: 'Доход',
    value: TransactionTypeEnum.INCOME,
  },
  {
    label: 'Перевод',
    value: TransactionTypeEnum.TRANSFER,
  },
]