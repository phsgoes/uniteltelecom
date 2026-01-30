<script lang="ts" setup>
const { app } = useRuntimeConfig()
</script>
<template>
  <UColorModeImage
    :light="`${app.baseURL}/images/light/unitel-logo.svg`"
    :dark="`${app.baseURL}/images/dark/unitel-logo.svg`"
  />
</template>