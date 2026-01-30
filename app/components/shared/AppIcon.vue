<script setup lang="ts">
import { computed } from 'vue'
import { useIconRegistry } from '~/composables/useIconRegistry'
import type { Component } from 'vue'

interface AppIconProps {
  icon: string
  size?: string | number
  color?: string
}

const props = defineProps<AppIconProps>()
const { customIconRegistry } = useIconRegistry()

function isCustomIconPrefix(value: unknown): value is string {
  return typeof value === 'string' && value in customIconRegistry
}

const parsedIcon = computed(() => {
  const parts = props.icon.split(':')
  return {
    prefix: parts.length > 1 ? parts[0]! : null,
    name: parts.length > 1 ? parts[1]! : null
  }
})

const resolvedCustomIcon = computed<Component | null>(() => {
  const { prefix, name } = parsedIcon.value

  if (!prefix || !name) return null
  if (!isCustomIconPrefix(prefix)) return null

  const iconsForPrefix = customIconRegistry[prefix]
  if (!iconsForPrefix) return null // <-- checagem explícita

  const icon = iconsForPrefix[name]
  return icon ?? null // <-- garante nunca retornar undefined
})
</script>

<template>
  <component
    v-if="resolvedCustomIcon"
    :is="resolvedCustomIcon"
    :size="size"
    :color="color"
  />
  <UIcon
    v-else
    :name="icon"
    :size="size"
    :color="color"
  />
</template>
