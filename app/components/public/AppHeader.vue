<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { NavigationMenuItem } from '@nuxt/ui'
import LogoUnitel from '~/components/shared/LogoUnitel.vue'

/**
 * IMPORTANT:
 * `to` is strictly a string
 * This avoids RouteLocationRaw issues entirely
 */
interface MenuItem {
  label: string
  to: string
  icon: string
}

const route = useRoute()
const hydrated = ref(false)

const items = ref<NavigationMenuItem[]>([
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Contato', to: '/contato' }
])

const mobileItems = ref<MenuItem[]>([
  {
    label: 'Home',
    to: '/',
    icon: 'lucide:home'
  },
  {
    label: 'Sobre',
    to: '/sobre',
    icon: 'lucide:book-open'
  },
  {
    label: 'Serviços',
    to: '/servicos',
    icon: 'lucide:cog'
  },
  {
    label: 'Contato',
    to: '/contato',
    icon: 'lucide:notebook-tabs'
  }
])

function isActive(path: string): boolean {
  if (!hydrated.value) return false // prevent SSR first-link active bug
  return route.path === path
}

// Only check active route on client to avoid SSR mismatch
onMounted(() => {
  hydrated.value = true
})

</script>
<template>
  <UHeader class="bg-transparent border-0">
    <template #left>
      <NuxtLink to="/">
        <LogoUnitel class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />
      <UColorModeButton />
    </template>

    <template #body>
      <nav class="h-full w-full">
        <ul class="flex h-[80vh] flex-col justify-evenly gap-0">
          <li
            v-for="item in mobileItems"
            :key="item.label"
            class="h-full"
          >
            <NuxtLink
              :to="item.to"
              :aria-current="isActive(item.to) ? 'page' : undefined"
              class="group relative h-full flex items-center justify-center gap-4 px-4 py-3
              dark:text-gray-50 text-gray-500 transition-colors duration-300 motion-reduce:transition-none"
              :class="{ 'text-primary-600 dark:text-primary-600': isActive(item.to) }"
            >
              <UIcon :name="item.icon" class="h-6 w-6 shrink-0"/>
              <span class="text-base">{{ item.label }}</span>
              <span
                class="absolute bottom-0 left-4 right-4 h-px
                      scale-x-0 bg-current
                      origin-center
                      transition-transform duration-300 ease-out
                      group-hover:scale-x-100 group-focus-visible:scale-x-100
                      motion-reduce:transition-none motion-reduce:transform-none"
                :class="{ 'scale-x-100': isActive(item.to) }"
              />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </template>
  </UHeader>
</template>
