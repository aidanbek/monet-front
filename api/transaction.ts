import type { ITransaction, ICreateTransaction } from '~/types1/Transaction'

export const getAll = () => {
  const { $api } = useNuxtApp()

  return $api<ITransaction[]>('/transactions', { method: 'GET' })
}

export const create = (data: ICreateTransaction) => {
  const { $api } = useNuxtApp()

  return $api<ITransaction>('/transactions', { method: 'POST', body: data })
}
