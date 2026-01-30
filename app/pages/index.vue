<script lang="ts" setup>
import LogoComuniq from '~/components/shared/LogoComuniq.vue'
import FuturisticBackground from '~/components/public/FuturisticBackground.vue'
import AppEmbeddedMap from '~/components/public/AppEmbeddedMap.vue'
import AppCarousel from '~/components/public/AppCarousel.vue'
import ClientsMarquee from '~/components/shared/ClientsMarquee.vue'
import { logosComercial, logosSaude } from '~/data/logos'
import { testimonials } from '~/data/testimonials'
import { sliderItems } from '~/data/slider'
import AppIcon from '~/components/shared/AppIcon.vue'

const features = {
  title: 'Soluções inteligentes em telecomunicações para empresas que não podem parar',
  description: 'A Unitel ajuda sua empresa a reduzir falhas na comunicação, evitar interrupções operacionais, ter controle e rastreabilidade no atendimento, atender exigências legais e institucionais, além de proteger a reputação da marca',
  items: [
    {
      title: 'ComuniQ',
      description: 'Plataforma de comunicação corporativa da Unitel, desenvolvida para integrar telefonia, atendimento, mobilidade e gestão em um único ambiente inteligente, seguro e escalável.',
      icon: 'unitel:comuniq'
    },
    {
      title: 'Telefonia Corporativa',
      description: 'Ideal para empresas que querem modernizar atendimento interno e externo. Reduz custos de telefonia física. Integra com CRM e mobilidade.',
      icon: 'lucide:phone-call'
    },
    {
      title: 'Atendimento automatizado',
      description: 'A URA inteligente reduz tempo de espera e direciona ligações com precisão. Suporte à jornada do cliente.',
      icon: 'lucide:speech'
    },
    {
      title: 'Call Center',
      description: 'Utilizamos plataformas modernas e de alto desempenho para garantir estabilidade, escalabilidade e integração eficiente, atendendo desde operações de call center até empresas e instituições de diversos portes e segmentos.',
      icon: 'lucide:headset'
    },
    {
      title: 'Infraestrutura e Redes Estruturadas',
      description: 'Projetos feitos sob medida com foco em desempenho e segurança. Cuidados com a certificação dos pontos de rede.',
      icon: 'lucide:audio-lines'
    },
    {
      title: 'Ouvidoria',
      description: 'A ouvidoria é um canal institucional estratégico que promove a escuta qualificada, fortalece a transparência e contribui para a melhoria contínua dos serviços, assegurando o diálogo ético e respeitoso entre a organização e seus públicos.',
      icon: 'lucide:network'
    }
  ]
}

useHead({ title: 'Home' })
</script>

<template>
  <NuxtLayout>
    <section class="h-screen overflow-hidden">
      <AppCarousel
        :items="sliderItems"
        :transitionTime="5000"
        :autoNextTime="9000"
      />
    </section>

    <UPageSection
      :title="features.title"
      :description="features.description"
      >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in features.items"
          :key="index"
          v-bind="item"
          spotlight
        >
          <template #leading>
            <AppIcon :icon="item.icon" class="w-5 h-5 text-primary dark:text-gray-50" />
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <section class="w-full h-screen">
      <FuturisticBackground 
        bg-color="#031422"
        line-color="#145F9C"
        :bg-opacity="0.2"
      >
        <div class="flex flex-col items-center justify-center h-full px-4 text-center">
          <LogoComuniq :dark-mode="true" class="w-3/12" />
          <div class="max-w-3xl mx-auto">
            <p class="text-lg font-light tracking-widest text-blue-200 sm:text-xl md:text-2xl font-mono mt-6">
              Plataforma de comunicação em nuvem para empresas que querem <span class="text-white font-bold animate-pulse">escalar e simplificar</span>.
            </p>
            <p class="text-lg font-light tracking-widest text-blue-200 sm:text-xl md:text-xl font-mono my-10">
              O que o ComuniQ entrega:
            </p>
            <ul class="text-left text-sm sm:text-md font-light tracking-widest text-blue-200 font-mono mt-6">
              <li class="py-3 border-b border-b-[rgba(255,255,255,.4)] border-t border-t-[rgba(255,255,255,.4)]">
                <UIcon name="lucide:circle-check-big" class="pl-12 mr-6" /> Comunicação unificada em nuvem
              </li>
              <li class="py-3 border-b border-b-[rgba(255,255,255,.4)]">
                <UIcon name="lucide:circle-check-big" class="pl-12 mr-6" /> Atendimento mais rápido e organizado
              </li>
              <li class="py-3 border-b border-b-[rgba(255,255,255,.4)]">
                <UIcon name="lucide:circle-check-big" class="pl-12 mr-6" /> Mobilidade para equipes presenciais e remotas
              </li>
              <li class="py-3 border-b border-b-[rgba(255,255,255,.4)]">
                <UIcon name="lucide:circle-check-big" class="pl-12 mr-6" /> Integração com sistemas e processos da empresa
              </li>
            </ul>
            <UButton
              color="neutral"
              variant="outline"
              class="rounded-none px-8 py-4 mt-10 cursor-pointer"
              as="link"
              to="/"
            >
              Saiba Mais
            </UButton>
          </div>
        </div>
      </FuturisticBackground>
    </section>

    <AppEmbeddedMap />

    <UPageSection
      id="testimonials"
      :title="testimonials.title"
      :description="testimonials.description"
      :items="testimonials.items"
    >
      <UContainer>
        <UPageColumns class="xl:columns-3">
          <UPageCard
            v-for="(testimonial, index) in testimonials.items"
            :key="index"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
          >
            <template #footer>
              <UUser
                v-bind="testimonial.user"
                size="xl"
              />
            </template>
          </UPageCard>
        </UPageColumns>
      </UContainer>
    </UPageSection>

    <UPageSection
      title="Instituições que escolheram nossa expertise"
      description="Empresas da área da saúde que confiam no nosso trabalho e constroem resultados conosco"
    >
      <ClientsMarquee
        :logos="logosSaude"
        direction="reverse"
        :duration="80"
        :gap="32"
        :rows="1"
        pause-on-hover
      />
    </UPageSection>

    <UPageSection
      title="Quem confia no nosso trabalho"
      description="Instituições de diferentes segmentos que fazem parte da nossa trajetória."
    >
      <ClientsMarquee
        :logos="logosComercial"
        direction="normal"
        :duration="70"
        :gap="32"
        :rows="1"
        pause-on-hover
      />
    </UPageSection>
  </NuxtLayout>
</template>
