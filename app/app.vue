<script lang="ts" setup>
const colorMode = useColorMode()
const themeColor = computed(() => colorMode.value === 'dark' ? '#171717' : 'white')

useHead({
  meta: [
    { key: 'theme-color', name: 'theme-color', content: themeColor }
  ],
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
