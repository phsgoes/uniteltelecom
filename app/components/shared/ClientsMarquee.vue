<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { ClientLogo } from '~/types';

type MarqueeDirection = 'normal' | 'reverse'

const props = withDefaults(
  defineProps<{
    logos: ClientLogo[]
    direction?: MarqueeDirection
    duration?: number
    gap?: number
    rows?: number
    pauseOnHover?: boolean
  }>(),
  {
    direction: 'normal',
    duration: 80,
    gap: 24,
    rows: 1,
    pauseOnHover: true
  }
)

const safeRows = Math.max(1, props.rows)

const rowsData = computed(() => {
  const result: ClientLogo[][] = Array.from(
    { length: safeRows },
    () => []
  )

  props.logos.forEach((logo, index) => {
    const rowIndex = index % safeRows
    result[rowIndex]?.push(logo)
  })

  return result
})

/**
 * Duplicate for seamless scroll
 */
const duplicatedRows = computed(() => rowsData.value.map(row => [...row, ...row]))

/**
 * Dynamic width calculation
 */
const tracks = ref<HTMLUListElement[]>([])

const trackStyles = ref<Record<number, Record<string, string>>>({})

const calculateWidths = async () => {
  await nextTick()

  tracks.value.forEach((track, index) => {
    if (!track) return

    const halfWidth = track.scrollWidth / 2

    trackStyles.value[index] = {
      '--marquee-distance': `-${halfWidth}px`,
      '--marquee-duration': `${props.duration}s`,
      '--marquee-direction': index % 2 === 0 ? props.direction : props.direction === 'normal' ? 'reverse' : 'normal',
      '--marquee-gap': `${props.gap}px`
    }
  })
}

onMounted(() => {
  if (!import.meta.client) return
  calculateWidths()
  window.addEventListener('resize', calculateWidths)
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  window.removeEventListener('resize', calculateWidths)
})

</script>

<template>
  <section class="relative w-full overflow-hidden py-6">
    <!-- Header -->
    <!-- <header class="mx-auto mb-8 max-w-5xl text-center px-4"> -->
    <header class="mx-auto mb-8 max-w-5xl px-8 text-left">
      <h2
        v-if="$slots.title"
        class="
          text-balance
          text-xl
          sm:text-2xl
          md:text-3xl
          font-medium
          tracking-tight
          text-gray-900
          dark:text-gray-100
        "
      >
        <slot name="title" />
      </h2>

      <p
        v-if="$slots.subtitle"
        class="
          mt-3
          text-pretty
          text-base
          sm:text-md
          md:text-lg
          leading-relaxed
          text-gray-600
          dark:text-gray-400
        "
      >
        <slot name="subtitle" />
      </p>
    </header>

    <!-- Edge fade -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white dark:from-gray-900 to-transparent z-2" />
    <div class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white dark:from-gray-900 to-transparent z-2" />

    <div class="marquee">
      <ul
        v-for="(row, rowIndex) in duplicatedRows"
        :key="rowIndex"
        ref="tracks"
        class="marquee-track"
        :class="{ 'pause-on-hover': pauseOnHover }"
        :style="trackStyles[rowIndex]"
      >
        <li
          v-for="(logo, index) in row"
          :key="`${logo.name}-${index}`"
          class="marquee-item"
        >
          <UTooltip :text="logo.name">
            <img
              :src="logo.src"
              :alt="logo.name"
              loading="lazy"
              class="
                h-10
                sm:h-12
                md:h-14
                w-auto
                grayscale
                opacity-80
                transition-all
                duration-300
                ease-in-out
                hover:grayscale-0
                hover:opacity-100
              "
            />
          </UTooltip>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  display: grid;
  gap: 1rem;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: var(--marquee-gap, 24px);

  animation-name: marquee-scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: var(--marquee-duration, 80s);
  animation-direction: var(--marquee-direction, normal);
}

.pause-on-hover:hover {
  animation-play-state: paused;
}

.marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--marquee-distance));
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>