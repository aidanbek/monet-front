<script setup lang="ts">
import { useAccountStore } from '~/stores/accountStore'
import AddModal from '~/components/Account/AddModal.vue'
import { storeToRefs } from 'pinia'
import List from '~/components/Account/List.vue'

const { getAccounts } = useAccountStore()
const { accounts } = storeToRefs(useAccountStore())

let addModalVisibility = ref(false)

onMounted(() => {
  getAccounts()
})

useHead({
  title: 'Счета'
})

</script>
<template>
  <a-row :gutter="[16, 16]">
    <a-col>
      <a-button @click="addModalVisibility = true">Добавить счет</a-button>
    </a-col>

  </a-row>

  <a-row :gutter="[16, 16]">
    <a-col :span="24">
      <List :items="accounts" />
    </a-col>
  </a-row>

  <AddModal
    :visibility="addModalVisibility"
    @after-close="addModalVisibility = false"
  />
</template>
<style scoped lang="scss">
</style>
