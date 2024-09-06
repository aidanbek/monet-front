import { defineStore } from 'pinia'
import { getAll } from '~/api/transaction'

export const useTransactionStore = defineStore('transactionstore', () => {
  const transactions = ref<any>([])

  const getTransactions = () => {
    if (transactions.value.length) {
      return
    }

    getAll().then(data => transactions.value = data)
  }

  return { transactions, getTransactions }
})
