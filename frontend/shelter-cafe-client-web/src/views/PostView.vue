<script setup lang="ts">
import { useRoute } from 'vue-router'
import { mockPost } from '@/datamodel/post'

import CafeMarkdown from '@/components/common/CafeMarkdown.vue'
import { md } from '@/utils/markdown'
const route = useRoute()

console.log(md.renderer.rules)
</script>

<template>
  <main class="px-64">
    <div>{{ route.params.id }}</div>
    <CafeMarkdown :title="mockPost.title" :content="mockPost.content"></CafeMarkdown>
  </main>
</template>
