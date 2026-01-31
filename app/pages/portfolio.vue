<script lang="ts" setup>
import { portfolios } from '~/data/portfolio'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

function evenOrOddToBoolean(index: number): boolean {
  return index % 2 !== 0
}
useHead({ title: 'Portfólio' })
</script>
<template>
  <NuxtLayout>
    <UPageSection
      v-for="(portfolio, index) in portfolios"
      :key="index"
      :title="portfolio.title"
      :description="portfolio.description"
      :orientation="portfolio.orientation"
      :reverse="width < 1024 ? false : evenOrOddToBoolean(index)"
      :features="portfolio.features"
      >
      <div v-if="portfolio.image" class="overflow-hidden">
        <img
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :hovered="{ scale: 1.3 }"
          :delay="200"
          :duration="600"
          :src="portfolio.image"
        />
      </div>
    </UPageSection>
  </NuxtLayout>
</template>