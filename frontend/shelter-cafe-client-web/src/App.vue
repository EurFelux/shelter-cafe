<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/NavBar.vue'
</script>

<template>
  <div>
    <header class="bg-base-100 h-18">
      <Navbar></Navbar>
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>
