import { defineStore } from 'pinia'
import { getAll } from '~/api/banks'
import type { IBank } from '~/types1/Bank'

export const useBankStore = defineStore('bankStore', () => {
  const banks = ref<IBank[]>([])

  const getBanks = () => {
    if (banks.value.length) {
      return
    }

    getAll().then(data => banks.value = data)
  }

  return { banks, getBanks }
})
