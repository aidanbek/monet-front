import type { IBank} from '~/types1/Bank'

export const getAll = () => {
  const { $api } = useNuxtApp()

  return $api<IBank[]>('/banks', { method: 'GET' })
}