<script setup lang="ts">
import { md } from '@/utils/markdown'
import hljs from 'highlight.js'
import { ref } from 'vue'
import DOMPurify from 'dompurify'
const { lang, content } = defineProps<{
  lang: string
  content: string
}>()

const code = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLButtonElement | null>(null)
const contentHTML = md.utils.escapeHtml(content)
const highlighted = hljs.highlight(contentHTML, { language: lang, ignoreIllegals: true }).value
if (code.value) {
  code.value.innerHTML = DOMPurify.sanitize(highlighted)
}

const onCopy = (btn: HTMLButtonElement | null) => {
  const code = decodeURIComponent(btn?.dataset.code || '')
  navigator.clipboard.writeText(code)
}
</script>

<template>
  <div class="bg-base-300 w-full overflow-hidden rounded-2xl">
    <div class="bg-base-200 flex items-center p-2">
      <div class="px-4 font-mono">&lt;{{ lang }}&gt;</div>
      <div class="grow"></div>
      <button
        ref="buttonRef"
        class="btn btn-neutral btn-square btn-ghost copy-btn"
        :data-code="encodeURIComponent(content)"
        @click="onCopy(buttonRef)"
      >
        <svg
          class="h-6 w-6 p-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path
            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
          />
        </svg>
      </button>
    </div>
    <pre
      class="mb-4 overflow-x-auto rounded-lg px-4"
    ><code class="font-mono text-sm !py-0 hljs !bg-transparent" ref="code">

    </code></pre>
  </div>
</template>
