// ~/plugins/iconRegistry.client.ts
import { defineNuxtPlugin } from '#app'
import { registerIconLibrary } from '~/composables/useIconRegistry'
import { defineAsyncComponent } from 'vue'

export default defineNuxtPlugin(() => {
  registerIconLibrary('unitel', {
    award: defineAsyncComponent(() => import('~/components/icons/UnitelAward.vue')),
    comuniq: defineAsyncComponent(() => import('~/components/icons/UnitelComuniq.vue')),
    eye: defineAsyncComponent(() => import('~/components/icons/UnitelEye.vue')),
    logo: defineAsyncComponent(() => import('~/components/icons/UnitelLogo.vue')),
    target: defineAsyncComponent(() => import('~/components/icons/UnitelTarget.vue')),
  })
})
