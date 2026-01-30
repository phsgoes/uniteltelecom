import { defineNuxtPlugin } from '#app'
import { registerIconLibrary } from '~/composables/useIconRegistry'
import { defineAsyncComponent } from 'vue'

export default defineNuxtPlugin(() => {
  // Registra a biblioteca 'unitel' na inicialização
  registerIconLibrary('unitel', {
    logo: defineAsyncComponent(() => import('~/components/icons/UnitelLogo.vue')),
    comuniq: defineAsyncComponent(() => import('~/components/icons/UnitelComuniq.vue'))
  })
})
