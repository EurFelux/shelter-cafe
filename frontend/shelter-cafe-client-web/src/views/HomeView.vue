<script setup lang="ts">
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLogo from '@/components/icons/IconLogo.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// posts
import { mockPosts } from '@/datamodel/post'
import PostCard from '@/components/post/PostCard.vue'
</script>

<template>
  <main class="px-16">
    <div class="grid grid-cols-4 gap-4">
      <!-- personal info -->
      <div class="bg-base-200 sticky top-8 m-4 flex h-96 flex-col items-center rounded-2xl py-12">
        <div class="p-6">
          <div class="mask mask-squircle">
            <IconLogo class="h-16 w-16"></IconLogo>
          </div>
        </div>

        <div class="text-2xl">{{ t('home.name') }}</div>
        <a
          href="https://github.com/EurFelux"
          class="hover:text-primary block p-1 transition-colors"
        >
          <IconGithub></IconGithub>
          <span class="p-2">eurfelux</span>
        </a>
      </div>
      <div class="col-span-2">
        <ul>
          <li v-for="post in mockPosts" :key="post.id">
            <PostCard v-bind="post"></PostCard>
          </li>
        </ul>
      </div>
      <aside>3</aside>
    </div>
  </main>
</template>
