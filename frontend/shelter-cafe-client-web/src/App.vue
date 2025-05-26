<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/NavBar.vue'
import { onBeforeMount, ref } from 'vue'
import { loadPreferedLang } from './i18n'

const isAppReady = ref(false)
onBeforeMount(async () => {
  await loadPreferedLang()
  isAppReady.value = true
})
</script>

<template>
  <div v-if="isAppReady">
    <header class="bg-base-100 h-18">
      <Navbar></Navbar>
    </header>
    <RouterView />
  </div>
  <div v-else class="loading loading-ball loading-xl"></div>
</template>

<style scoped></style>
