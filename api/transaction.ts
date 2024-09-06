import type { ITransaction, ICreateTransaction } from '~/types/Transaction'

export const getAll = () => {
  const { $api } = useNuxtApp()

  return $api<ITransaction[]>('/transactions', { method: 'GET' })
}

export const create = (data: ICreateTransaction) => {
  const { $api } = useNuxtApp()

  return $api<ITransaction>('/transactions', { method: 'POST', body: data })
}
