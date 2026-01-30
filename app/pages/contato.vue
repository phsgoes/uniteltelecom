<script lang="ts" setup>
import AppContactForm from '~/components/public/AppContactForm.vue';
import AppEmbeddedMap from '~/components/public/AppEmbeddedMap.vue'
useHead({ title: 'Contato' })
</script>

<template>
  <NuxtLayout>
    <UPageSection>
      <UPageColumns class="lg:columns-2">
        <div>
          <h3 class="text-highlighted text-md sm:text-lg text-pretty font-semibold text-center mb-10">Deixe sua mensagem e falaremos com você o quanto antes.</h3>
          <AppContactForm />
        </div>
        <div>
          <h3 class="text-highlighted text-md sm:text-lg text-pretty font-semibold text-center mb-10">Ou se preferir, ligue diretamente pra gente.</h3>
          <div class="flex items-center justify-center pt-4">
            <UButton icon="lucide:phone" size="xl" variant="outline">
              Click to Call
            </UButton>
          </div>
        </div>
      </UPageColumns>
    </UPageSection>
    <AppEmbeddedMap />
  </NuxtLayout>
</template>
