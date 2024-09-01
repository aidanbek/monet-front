import { defineStore } from 'pinia'
import { getAll } from '~/api/account'

export const useAccountStore = defineStore('accountStore', () => {
  const accounts = ref<any>([])

  const getAccounts = () => {
    if (accounts.value.length) {
      return
    }

    getAll().then(data => accounts.value = data)
  }

  return { accounts, getAccounts }
})
