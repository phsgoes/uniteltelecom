import { reactive, markRaw } from 'vue'
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

  for (const [name, component] of Object.entries(icons)) {
    // 🔥 ESSENCIAL: impede o Vue de tornar o componente reativo
    customIconRegistry[prefix][name] = markRaw(component)
  }
}

export function useIconRegistry() {
  return {
    customIconRegistry,
    registerIconLibrary
  }
}
