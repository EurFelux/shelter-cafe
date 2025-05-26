<script setup lang="ts">
import { usePreferredColorScheme } from '@vueuse/core'

const prefered = usePreferredColorScheme()
</script>

<template>
  <div class="mockup-browser">
    <ul class="list">
      <li class="list-item">{{ prefered }}</li>
    </ul>
  </div>
</template>
