<script setup lang="ts">
defineOptions({ inheritAttrs: false })

import { RouterLink } from 'vue-router'
const { to, activeClass } = defineProps<{
  to?: string
  activeClass?: string
  inactiveClass?: string
}>()
</script>

<template>
  <RouterLink v-if="to" :to="to" custom v-slot="{ navigate, href, isActive }">
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </RouterLink>

  <a v-else v-bind="$attrs"><slot /></a>
</template>
