<script setup lang="ts">
import { shallowRef } from 'vue'
import IconError from '../icons/IconError.vue'
import IconInfo from '../icons/IconInfo.vue'
import IconWarning from '../icons/IconWarning.vue'
import IconSuccess from '../icons/IconSuccess.vue'

enum AlertType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

const { type, text } = defineProps<{
  type?: AlertType
  text: string
}>()

const icon = shallowRef<
  typeof IconInfo | typeof IconSuccess | typeof IconWarning | typeof IconError
>(IconInfo)

switch (type) {
  case AlertType.Info:
    icon.value = IconInfo
    break
  case AlertType.Success:
    icon.value = IconSuccess
    break
  case AlertType.Warning:
    icon.value = IconWarning
    break
  case AlertType.Error:
    icon.value = IconError
    break
}
</script>

<template>
  <div role="alert" :class="[`alert alert-${type}`]">
    <component :is="icon"></component>
    <span>{{ text }}</span>
  </div>
</template>
