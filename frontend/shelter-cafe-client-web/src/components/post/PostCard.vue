<script setup lang="ts">
import type { SimplePost } from '@/datamodel/post'
// import CafeImage from '../common/CafeImage.vue'
import CafeLink from '../common/CafeLink.vue'
import IconLike from '../icons/IconLike.vue'
import IconView from '../icons/IconView.vue'
import { useRouter } from 'vue-router'
import { formatNumber } from '@/utils'

const { id, title, description, content, views, likes } = defineProps<SimplePost>()
const router = useRouter()
const routes = router.getRoutes()
const to = routes.find((v) => v.name === 'post')?.path.split(':')[0] + id.toString()
// const styleBgImage = banner ? `background-image: url(${banner})` : ''
</script>

<template>
  <CafeLink
    class="card card-side bg-base-200 m-4 h-48 w-full cursor-pointer bg-contain bg-right bg-no-repeat transition-transform hover:scale-[1.01]"
    :to="to"
    :aria-label="title"
  >
    <div class="card-body">
      <h2 class="card-title line-clamp-1">{{ title }}</h2>
      <div class="grow">
        <p class="line-clamp-3 text-sm text-gray-500">
          {{ description ?? content }}
        </p>
      </div>
      <div class="flex">
        <div class="tooltip m-1 flex w-12 items-center" :data-tip="views">
          <IconView class="mr-1 h-4 w-4"></IconView>
          <span>{{ formatNumber(views) }}</span>
        </div>
        <div class="tooltip m-1 flex w-12 items-center" :data-tip="likes">
          <IconLike class="mr-1 h-4 w-4"></IconLike>
          <span>{{ formatNumber(likes) }}</span>
        </div>
      </div>
    </div>
    <!-- image
    <div v-if="banner" class="h-full rounded-lg">
      <CafeImage :src="banner" wrapper-class="h-full w-48 overflow-hidden"></CafeImage>
    </div> -->
  </CafeLink>
</template>
