<script setup lang="ts">
import IconLogo from '../icons/IconLogo.vue'
import ButtonI18n from './ButtonI18n.vue'
// import ButtonColorMode from './ButtonColorMode.vue'
import IconSearch from '../icons/IconSearch.vue'
import { computed } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import CafeLink from '../common/CafeLink.vue'

const { t } = useI18n()
// Enviroment

// Navigation
const navItems = computed(() => [
  {
    name: t('nav.home'),
    path: '/',
  },
  {
    name: t('nav.about'),
    path: '/about',
  },
  {
    name: 'debug',
    path: '/debug',
  },
])

const baseClass = 'flex justify-center items-center block p-4 '
const activeClass = baseClass + 'text-primary transition-colors'
const inactiveClass = baseClass + 'hover:text-primary transition-colors'

// Hotkey
const { meta_K } = useMagicKeys()

whenever(meta_K, () => {
  document.getElementById('search-input')?.focus()
})
</script>

<template>
  <div class="flex h-full px-4">
    <nav class="flex h-full justify-start">
      <IconLogo class="relative -top-5 m-2 h-18"></IconLogo>
      <span id="app-name" class="mx-2 flex items-center justify-center text-2xl select-none"
        >Shelter Café</span
      >
      <CafeLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :active-class="activeClass"
        :inactive-class="inactiveClass"
      >
        {{ item.name }}
      </CafeLink>
    </nav>
    <!-- Search -->
    <div class="mx-2 flex grow items-center">
      <label class="input w-full">
        <IconSearch></IconSearch>
        <input type="search" id="search-input" :placeholder="t('search.placeholder')" />
        <!-- TODO: match os -->
        <kbd class="kbd kbd-sm">⌘</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
      </label>
    </div>
    <!-- <div class="flex items-center px-2">
      <ButtonColorMode></ButtonColorMode>
    </div> -->
    <div class="flex items-center">
      <ButtonI18n></ButtonI18n>
    </div>
  </div>
</template>
