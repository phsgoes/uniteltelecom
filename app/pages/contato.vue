<script setup lang="ts">
import AppEmbeddedMap from '~/components/public/AppEmbeddedMap.vue'
import AppSocialLink from '~/components/public/AppSocialLink.vue'
import { contacts, socials } from '~/data/contact'
useHead({ title: 'Contato' })
</script>

<template>
  <NuxtLayout>
    <UPageSection
      title="Vamos conversar"
      description="Escolha o canal que preferir e fale com a gente agora mesmo."
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <UPageCard
          v-for="(item, index) in contacts"
          :key="index"
          v-bind="item"
          spotlight
        >
          <UColorModeImage
            v-if="item.image"
            :light="`${item.image.path}-light.svg`"
            :dark="`${item.image.path}-dark.svg`"
            :width="item.image.width"
            :height="item.image.height"
            :alt="item.title"
            loading="lazy"
            class="w-full"
          />
        </UPageCard>
      </div>
    </UPageSection>

    <UPageSection
      title="Onde estamos"
      description="Venha nos visitar pessoalmente. Veja no mapa."
      class="text-center"
    >
      <AppEmbeddedMap />
    </UPageSection>
      
    <UPageSection
      title="Redes sociais"
      description="Acompanhe nosso conteúdo e novidades"
      class="text-center"
    >
      <div class="flex justify-center gap-4">
        <AppSocialLink
          v-for="social in socials"
          :key="social.name"
          :social="social"
        />
      </div>
    </UPageSection>
  </NuxtLayout>
</template>
