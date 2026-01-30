<script setup lang="ts">
import type { SocialItem } from '@/types'

defineProps<{
  social: SocialItem
}>()
</script>

<template>
  <UButton
    :to="social.href"
    :aria-label="social.name"
    external
    variant="outline"
    color="neutral"
    size="xl"
    class="
      w-12 h-12
      rounded-full
      flex items-center justify-center
      hover:border-transparent
      transition-all
    "
    :class="social.customClasses || ''"
  >
    <UIcon :name="social.icon" class="text-2xl" />
  </UButton>
</template>
