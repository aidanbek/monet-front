<template>
  <a-config-provider :locale="ru">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </a-config-provider>
</template>

<script setup>
import ru from 'ant-design-vue/es/locale/ru_RU'
</script>
