<script setup lang="ts">
import IconGithub from '@/components/icons/IconGithub.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// posts
import { mockPosts } from '@/datamodel/post'
import PostCard from '@/components/post/PostCard.vue'
import CafeImage from '@/components/common/CafeImage.vue'
import CafeLink from '@/components/common/CafeLink.vue'
</script>

<template>
  <main class="px-16">
    <div class="grid grid-cols-4 gap-4">
      <!-- personal info -->
      <div
        class="bg-base-200 sticky top-8 m-4 flex h-fit flex-col items-center rounded-2xl p-4 pt-12"
      >
        <!-- avatar -->
        <CafeLink href="https://www.pixiv.net/artworks/129384905">
          <div class="mask mask-squircle m-4">
            <CafeImage src="natsu.jpg" class="h-48 w-48"></CafeImage>
          </div>
        </CafeLink>
        <!-- name -->
        <div class="text-2xl">{{ t('home.name') }}</div>
        <!-- links -->
        <a
          href="https://github.com/EurFelux"
          class="hover:text-primary block p-1 transition-colors"
        >
          <IconGithub></IconGithub>
          <span class="p-2">eurfelux</span>
        </a>
        <!-- motto -->
        <blockquote class="text-accent p-4 italic">
          <p>
            {{ t('home.motto') }}
          </p>
          <p class="text-right">-- {{ t('home.motto-from') }}</p>
        </blockquote>
      </div>
      <!-- cards -->
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
