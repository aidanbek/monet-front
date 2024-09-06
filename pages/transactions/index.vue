<script setup lang="ts">

import AddModal from '~/components/Transaction/AddModal.vue'
import List from '~/components/Transaction/List.vue'
import { useTransactionStore } from '~/stores/transactionStore'
import { storeToRefs } from 'pinia'
const { getTransactions } = useTransactionStore()
const { transactions } = storeToRefs(useTransactionStore())

let addModalVisibility = ref(false)

onMounted(() => {
  getTransactions()
})
</script>

<template>
  <a-row :gutter="[16, 16]">
    <a-col>
      <a-button @click="addModalVisibility = true">Добавить транзакцию</a-button>
    </a-col>

  </a-row>

  <a-row :gutter="[16, 16]">
    <a-col :span="24">
      <List :items="transactions" />
    </a-col>
  </a-row>


  <AddModal
    :visibility="addModalVisibility"
    @after-close="addModalVisibility = false"
  />
</template>

<style scoped lang="scss">

</style>