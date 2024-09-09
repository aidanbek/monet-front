import type { IAccount, ICreateAccount } from '~/types1/Account'

export const getAll = () => {
  const { $api } = useNuxtApp()

  return $api<IAccount[]>('/accounts', { method: 'GET' })
}

export const create = (data: ICreateAccount) => {
  const { $api } = useNuxtApp()

  return $api<IAccount>('/accounts', { method: 'POST', body: data })
}

export const getById = (id: number) => {
  const { $api } = useNuxtApp()

  return $api<IAccount>(`/accounts/${id}`, { method: 'GET' })
}