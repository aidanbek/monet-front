import { AccountTypeEnum } from '~/types/Account'

export const AccountTypes = [
  {
    label: 'Карта',
    value: AccountTypeEnum.CARD,
  },
  {
    label: 'Наличные',
    value: AccountTypeEnum.CASH,
  },
  {
    label: 'Кредит',
    value: AccountTypeEnum.CREDIT,
  },
  {
    label: 'Счет',
    value: AccountTypeEnum.ACCOUNT,
  },
]