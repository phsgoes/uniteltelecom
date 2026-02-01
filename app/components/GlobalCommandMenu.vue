<script setup lang="ts">
import { navigationItems } from '~/data/navigation'
import type { NavigationItem } from '~/types'

const colorMode = useColorMode()
const open = ref<boolean>(false)

function changeColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

/**
 * Commands no formato esperado pelo UCommandPalette
 */
const commands = computed(() => {
  return [
    {
      id: 'navigation',
      label: 'Navegação',
      slot: 'navigation' as const,
      items: navigationItems.map((item: NavigationItem) => ({
        id: item.to,
        label: item.label,
        icon: item.icon,
        onSelect: async () => {
          open.value = false
          await navigateTo(item.to)
        }
      }))
    },
    {
      id: 'actions',
      label: 'Ações',
      items: [
        {
          label: 'Mudar tema claro/escuro',
          icon: 'fa7-solid:moon',
          onSelect: async () => {
            open.value = false
            changeColorMode()
          }
        }
      ]
    }
  ]
})

/** * Ctrl + Space → abre o Command Palette */
function handleKeydown(event: KeyboardEvent): void {
  if (event.ctrlKey && event.code === 'Space') {
    event.preventDefault()
    open.value = true
  }
}

onMounted(() => { window.addEventListener('keydown', handleKeydown) })
onBeforeUnmount(() => { window.removeEventListener('keydown', handleKeydown) })
</script>

<template>
  <UModal
    v-model:open="open"
    title="Command palette"
    description="Search and navigate through available commands"
  >
    <template #content>
      <UCommandPalette
        close
        autofocus
        :groups="commands"
        @update:open="open = $event"
        />
        <!-- :groups="[{ id: 'commands', items: commands }]" -->
    </template>
  </UModal>
  <!-- <UModal v-model:open="open">
    <UButton
      aria-hidden="true"
      tabindex="-1"
      class="sr-only"
      label="Abrir janela de navegação"
    />
    <template #content>
      <UCommandPalette
        @update:open="open = $event"
        :groups="[{ id: 'commands', items: commands }]"
        autofocus
        close
      />
    </template>
  </UModal> -->
</template>
