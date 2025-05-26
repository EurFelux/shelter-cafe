<script setup lang="ts">
import { useActiveElement } from '@vueuse/core'
import IconDropdown from '../icons/IconDropdown.vue'
import IconI18n from '../icons/IconI18n.vue'
import { setI18nLanguage, SUPPORTED_LOCALES } from '@/i18n'
import type { SupportedLanguage } from '@/i18n'

const activeElement = useActiveElement()

const onSelectLocale = (lang: SupportedLanguage) => {
  setI18nLanguage(lang)
  activeElement.value?.blur()
}
</script>

<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost m-1">
      <IconI18n class="text-base-content h-6 w-6"></IconI18n>
      <IconDropdown class="h-4 w-4"></IconDropdown>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li v-for="lang in SUPPORTED_LOCALES" :key="lang.id" @click="onSelectLocale(lang.id)">
        <a>{{ lang.name }}</a>
      </li>
    </ul>
  </div>
</template>
