<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: 'w-12 h-12',
  },
})
</script>

<template>
  <svg :class="props.class" viewBox="30 30 40 60" xmlns="http://www.w3.org/2000/svg">
    <!-- 咖啡杯底部椭圆 -->
    <ellipse cx="50" cy="80" rx="12" ry="5" fill="#C8B6A6" />

    <!-- 咖啡杯主体 -->
    <rect x="38" y="60" width="24" height="20" rx="10" fill="#E6DAD1" />

    <!-- 咖啡杯把手 -->
    <circle cx="64" cy="70" r="4" fill="none" stroke="#C8B6A6" stroke-width="1.5" />

    <!-- 蒸汽线条 -->
    <path
      d="M45 55 Q43 48 48 45 Q53 42 51 35"
      stroke="#C8B6A6"
      stroke-width="1.5"
      fill="none"
      stroke-linecap="round"
    />
    <path
      d="M55 55 Q53 48 58 45 Q63 42 61 35"
      stroke="#C8B6A6"
      stroke-width="1.5"
      fill="none"
      stroke-linecap="round"
    />
  </svg>
</template>
