<script setup lang="ts">
const { class: cls } = defineProps<{
  class?: string
}>()
</script>

<template>
  <svg :class="['bg-amber-50', cls]" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <!-- 背景，无圆角 -->
    <!-- <rect width="100%" height="100%" fill="#F7F3EF" /> -->

    <!-- 咖啡杯 -->
    <ellipse cx="100" cy="85" rx="25" ry="10" fill="#C8B6A6" />
    <rect x="75" y="55" width="50" height="30" fill="#E6DAD1" />
    <circle cx="125" cy="70" r="7" fill="none" stroke="#C8B6A6" stroke-width="2" />

    <!-- 蒸汽 -->
    <path
      d="M90 50 Q88 42 95 40 Q102 38 100 32"
      stroke="#C8B6A6"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
    />
    <path
      d="M110 50 Q108 42 115 40 Q122 38 120 32"
      stroke="#C8B6A6"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
    />

    <!-- 文字在杯子下方 -->
    <text
      x="100"
      y="115"
      text-anchor="middle"
      font-family="Georgia, serif"
      font-size="16"
      fill="#6E6055"
    >
      图片加载失败
    </text>
    <text
      x="100"
      y="132"
      text-anchor="middle"
      font-family="Georgia, serif"
      font-size="12"
      fill="#A19890"
    >
      先来杯咖啡吧 ☕
    </text>
  </svg>
</template>
