<script setup lang="ts">

import AddModal from '~/components/Transaction/AddModal.vue'

let addModalVisibility = ref(false)
</script>

<template>
  <a-row :gutter="[16, 16]">
    <a-col>
      <a-button @click="addModalVisibility = true">Добавить транзакцию</a-button>
    </a-col>

  </a-row>

  <AddModal
    :visibility="addModalVisibility"
    @after-close="addModalVisibility = false"
  />
</template>

<style scoped lang="scss">

</style>