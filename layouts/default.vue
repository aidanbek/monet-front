<template>
  <a-layout has-sider class="!min-h-screen">
    <a-layout-sider class="hidden pt-2 md:block">
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="home">
          <nuxt-link to="/">
            <span>Главная</span>
          </nuxt-link>
        </a-menu-item>

        <a-menu-item key="accounts">
          <nuxt-link to="/accounts">
            <span>Счета</span>
          </nuxt-link>
        </a-menu-item>

        <a-menu-item key="transactions">
          <nuxt-link to="/transactions">
            <span>Транзакции</span>
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout class="mb-0 mx-4">
      <a-layout-content class="content m-h-90 bg-white mt-4 p-6">
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
</script>

<style>
body {
  margin: 0;
}
</style>
