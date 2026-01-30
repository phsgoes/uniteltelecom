<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <UPageSection class="h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">{{ error.status }}</h1>
      <p class="mb-6">{{ error.message }}</p>
      <UButton icon="lucide:arrow-left" size="xl" variant="outline" to="/">Voltar</UButton>
    </div>
  </UPageSection>
</template>