<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { md } from '@/utils/markdown'
import DOMPurify from 'dompurify'

const { title, content } = defineProps<{
  title: string
  content: string
}>()

const contentDiv = ref<HTMLElement | null>(null)

onMounted(() => {
  // api
  if (contentDiv.value) {
    contentDiv.value.innerHTML = DOMPurify.sanitize(md.render(content))
    contentDiv.value.querySelectorAll<HTMLElement>('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = decodeURIComponent(btn.dataset.code || '')
        navigator.clipboard.writeText(code)
      })
    })
  }
})
</script>

<template>
  <article>
    <h1 class="border-b-primary mb-2 border-b-2 p-2 text-3xl">{{ title }}</h1>
    <slot name="under-title"></slot>
    <div ref="contentDiv">
      <slot></slot>
    </div>
  </article>
</template>
