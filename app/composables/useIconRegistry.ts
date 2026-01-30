import { reactive } from 'vue'
import type { Component } from 'vue'

export interface IconRegistry {
  [prefix: string]: Record<string, Component>
}

// Registro reativo global
const customIconRegistry = reactive<IconRegistry>({})

/**
 * Registra uma biblioteca de ícones sob um prefixo
 */
export function registerIconLibrary(
  prefix: string,
  icons: Record<string, Component>
) {
  if (!customIconRegistry[prefix]) {
    customIconRegistry[prefix] = {}
  }
  Object.assign(customIconRegistry[prefix], icons)
}

export function useIconRegistry() {
  return {
    customIconRegistry,
    registerIconLibrary
  }
}
