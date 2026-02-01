<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Stat {
  label: string
  value: number
}

const stats = ref<Stat[]>([
  { label: 'anos de experiência', value: 43 },
  { label: 'projetos realizados', value: 1200 },
  { label: 'clientes ativos', value: 600 }
])

const counters = ref<number[]>(stats.value.map(() => 0))
const container = ref<HTMLElement | null>(null)

const animate = (index: number, target: number) => {
  const duration = 1500
  const start = performance.now()

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    counters.value[index] = Math.floor(progress * target)

    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (!container.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]!.isIntersecting) {
        stats.value.forEach((stat, index) => animate(index, stat.value))
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  observer.observe(container.value)
})
</script>

<template>
  <section
    ref="container"
    class="bg-gray-100 dark:bg-transparent py-16"
  >
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-6 text-center">
      <div v-for="(stat, index) in stats" :key="stat.label">
        <p class="text-4xl font-bold text-red-600">{{ counters[index] }}</p>
        <p class="mt-2 text-sm uppercase tracking-wide">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>
