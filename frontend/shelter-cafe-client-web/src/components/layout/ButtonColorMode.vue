<script setup lang="ts">
import { onBeforeMount, shallowRef } from 'vue'
import IconMoon from '../icons/IconMoon.vue'
import IconSun from '../icons/IconSun.vue'
import IconSunMoon from '../icons/IconSunMoon.vue'

import { useColorMode } from '@vueuse/core'

const { store } = useColorMode()

const currentIcon = shallowRef<typeof IconMoon | typeof IconSun | typeof IconSunMoon>()

onBeforeMount(() => {
  switch (store.value) {
    case 'auto':
      currentIcon.value = IconSunMoon
      break
    case 'dark':
      currentIcon.value = IconMoon
      break
    case 'light':
      currentIcon.value = IconSun
      break
  }
})

const onChangeColorMode = () => {
  if (store.value === 'auto') {
    store.value = 'light'
    currentIcon.value = IconSun
  } else if (store.value === 'light') {
    store.value = 'dark'
    currentIcon.value = IconMoon
  } else {
    store.value = 'auto'
    currentIcon.value = IconSunMoon
  }
}
</script>

<template>
  <button class="btn btn-ghost btn-circle btn-neutral" @click="onChangeColorMode">
    <Component :is="currentIcon"> </Component>
  </button>
</template>
