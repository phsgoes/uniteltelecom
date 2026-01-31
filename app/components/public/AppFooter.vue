<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { FooterColumn } from '@nuxt/ui'
import type { FooterItem } from '~/types'
import AppIcon from '../shared/AppIcon.vue'

const route = useRoute()
const hydrated = ref(false)

const columns: FooterColumn<FooterItem>[] = [
  {
    label: 'Unitel',
    children: [
      { 
        label: 'Home',
        to: '/',
        icon: 'fa7-solid:home'
      },
      { 
        label: 'Sobre',
        to: '/sobre',
        icon: 'fa7-solid:book-open'
      },
      { 
        label: 'Serviços',
        to: '/servicos',
        icon: 'fa7-solid:cog'
      },
      { 
        label: 'Contato',
        to: '/contato',
        icon: 'fa7-solid:contact-book'
      }
    ]
  },
  {
    label: 'Siga-nos nas redes',
    children: [
      {
        label: 'Instagram',
        icon: 'fa7-brands:instagram',
        to: 'https://www.instagram.com/uniteltelecom_/'
      },
      {
        label: 'LinkedIn',
        icon: 'fa7-brands:linkedin',
        to: 'https://www.linkedin.com/company/uniteltelecomvca'
      },
      {
        label: 'X (Twitter)',
        icon: 'fa7-brands:x-twitter'
      },
    ]
  },
  {
    label: 'Contato',
    children: [
      {
        label: 'Praça Joaquim Correia, Centro, Vitória da Conquista',
        icon: 'fa7-solid:location-dot',
        to: 'https://www.google.com/maps/place/Unitel+Telecom/@-14.8491661,-40.8396598,17z/data=!3m1!4b1!4m6!3m5!1s0x7463a4b531fcd4d:0x9a8f24ad4398e324!8m2!3d-14.8491713!4d-40.8370849!16s%2Fg%2F1tdbwz27?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D',
        target: '_blank'
      },
      {
        label: '(77) 2101-3300',
        icon: 'fa7-solid:volume-control-phone',
        to: 'tel:+557721013300'
      },
      {
        label: 'atendimento@uniteltelecom.com.br',
        icon: 'fa7-solid:at',
        to: 'mailto:atendimento@uniteltelecom.com.br'
      }
    ]
  },
]

function isActive(path?: string): boolean {
  if (!hydrated.value) return false // prevent SSR first-link active bug
  return route.path === path
}

// Only check active route on client to avoid SSR mismatch
onMounted(() => {
  hydrated.value = true
})
</script>

<template>
  <USeparator>
    <AppIcon icon="unitel:logo" class="w-5 h-5" />
  </USeparator>

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div
            v-for="column in columns"
            :key="column.label"
            class="space-y-4"
          >
            <h3 class="text-sm font-semibold text-foreground">{{ column.label }}</h3>
            <ul class="space-y-3">
              <li
                v-for="item in column.children"
                :key="item.label"
              >
                <NuxtLink
                  v-if="column.label === 'Unitel'"
                  :to="item.to"
                  :class="{ 'text-primary-600 dark:text-primary-600': isActive(item.to) }"
                  class="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  <UIcon
                     v-if="item.icon"
                    :name="item.icon"
                    class="h-4 w-4 shrink-0 mt-0.5"
                  />
                  <span>{{ item.label }}</span>
                </NuxtLink>

                <a
                  v-else
                  :href="item.to"
                  :target="item.target"
                  class="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  <UIcon
                    v-if="item.icon"
                    :name="item.icon"
                    class="h-4 w-4 shrink-0 mt-0.5"
                  />
                  <span>
                  <!-- <span class="break-words"> -->
                    {{ item.label }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        Unitel Telecom • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <p class="font-handwritten text-red-600 dark:text-white">Jesus é o Único Caminho</p>
    </template>
  </UFooter>
</template>