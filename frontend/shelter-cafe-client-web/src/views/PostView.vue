<script setup lang="ts">
import { useRoute } from 'vue-router'
import { mockPost } from '@/datamodel/post'

import CafeMarkdown from '@/components/common/CafeMarkdown.vue'
const route = useRoute()
</script>

<template>
  <main class="px-64">
    <div>{{ route.params.id }}</div>
    <CafeMarkdown :title="mockPost.title" :content="mockPost.content"></CafeMarkdown>
  </main>
</template>
