<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import IconFallbackImg from '../icons/IconFallbackImg.vue'

defineOptions({
  inheritAttrs: false,
})

const { src } = defineProps<{
  src: string
  wrapperClass?: string
  imgClass?: string
}>()

const currentComponent = shallowRef<typeof IconFallbackImg | 'img'>(src ? 'img' : IconFallbackImg)

const figure = ref(null)

const onerror = () => {
  isLoading.value = false
  currentComponent.value = IconFallbackImg
}

const isLoading = ref(true)
</script>

<template>
  <figure
    v-if="src"
    :class="[
      wrapperClass,
      {
        skeleton: isLoading,
      },
    ]"
    ref="figure"
  >
    <component
      :is="currentComponent"
      v-bind="$attrs"
      :src="src"
      @load="isLoading = false"
      @error="onerror"
    ></component>
  </figure>
</template>
