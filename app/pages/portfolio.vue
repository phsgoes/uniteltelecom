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
    <ClientOnly>
      <UPageSection
        v-for="(portfolio, index) in portfolios"
        :key="index"
        :orientation="portfolio.orientation"
        :reverse="width < 1024 ? false : evenOrOddToBoolean(index)"
      >
        <template #header>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="600"
            :duration="600"
            class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted"
          >
            {{ portfolio.title }}
          </h2>
          <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="600"
            :duration="700"
            class="text-base sm:text-lg text-muted text-pretty mt-6"
          >
            {{ portfolio.description }}
          </div>
        </template>

        <template #body>
          <ul
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="600"
            :duration="800"
            class="grid gap-4"
          >
            <li
              v-for="feature in portfolio.features"
              :data-orientation="portfolio.orientation"
              class="relative rounded-sm flex items-start gap-2.5"
            >
              <div class="inline-flex items-center justify-center p-0.5">
                <UIcon :name="feature.icon" />
              </div>
              <div class="">
                <div class="text-[15px] text-pretty text-muted">
                  {{ feature.description }}
                </div>
              </div>
            </li>
          </ul>
        </template>


        <div v-if="portfolio.image" class="overflow-hidden">
          <img
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :hovered="{ scale: 1.3 }"
            :tapped="{ scale: 1.3 }"
            :delay="300"
            :duration="800"
            :src="portfolio.image"
          />
        </div>
      </UPageSection>
    </ClientOnly>
  </NuxtLayout>
</template>
