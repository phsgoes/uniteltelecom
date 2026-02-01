<script lang="ts" setup>
import AppCounterStats from '~/components/public/AppCounterStats.vue'
import AppIcon from '~/components/shared/AppIcon.vue'
import { logosComercial, logosSaude } from '~/data/logo'
import { testimonials } from '~/data/testimonial'

const aboutUs = {
  firstTitle: 'Nossa história',
  firstDescription: 'Nossa história é construída em confiança, tecnologia e continuidade. Atuando profissionalmente desde 1983 em Feira de Santana (BA) e região, sua fundação em Vitória da Conquista (BA) se deu em 1989 e desde então atua há mais de 40 anos no desenvolvimento e na implementação de soluções em telecomunicações para empresas e instituições que não podem parar. Ao longo dessa trajetória, consolidamos parcerias estratégicas com grandes fabricantes de tecnologia, tornando-nos responsáveis por uma parcela significativa das estruturas de comunicação digital em operação em pequenas, médias e grandes empresas da região. Hoje, a Unitel é reconhecida como uma das principais referências baianas em telefonia IP, comunicação corporativa e infraestrutura de redes, unindo experiência técnica, inovação contínua e compromisso com a confiabilidade operacional de seus clientes.',
  secondTitle: 'O que fazemos?',
  secondDescription: 'Desenvolvemos soluções de comunicação que conectam pessoas, processos e decisões. Somos especializados na criação e implementação de projetos de redes estruturadas e soluções integradas de comunicação, que unem voz, dados, imagem e tecnologias avançadas como biometria. Utilizamos plataformas modernas e de alto desempenho para garantir estabilidade, escalabilidade e integração eficiente, atendendo desde operações de call center até empresas e instituições de diversos portes e segmentos. Mais do que tecnologia, entregamos soluções confiáveis, personalizadas e alinhadas às necessidades reais de cada operação.',
  items: [
    {
      title: 'Missão',
      description: 'Conectar empresas e instituições por meio de soluções de telecomunicações confiáveis, garantindo comunicação contínua e eficiente.',
      icon: 'unitel:target'
    },
    {
      title: 'Visão',
      description: 'Ser reconhecida como referência em telecomunicações pela confiança, inovação e qualidade das soluções que entregamos.',
      icon: 'unitel:eye'
    },
    {
      title: 'Valores',
      description: 'Confiança nas relações e nas soluções, Compromisso com o cliente,	Inovação contínua, Responsabilidade e ética',
      icon: 'unitel:award'
    }
  ]
}

useHead({ title: 'Sobre' })
</script>

<template>
  <NuxtLayout>
    <UPageSection>
      <template #header>
        <UContainer>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center mb-16">{{ aboutUs.firstTitle }}</h2>
          <p class="text-base text-center sm:text-lg text-medium mb-16">{{ aboutUs.firstDescription }}</p>
          <h3 class="text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted text-center mb-16">{{ aboutUs.secondTitle }}</h3>
          <p class="text-base text-center sm:text-lg text-medium mb-16">{{ aboutUs.secondDescription }}</p>
        </UContainer>
      </template>
      <UContainer>
        <UPageGrid>
          <UPageFeature
            v-for="item in aboutUs.items"
            :key="item.title"
            orientation="vertical"
          >
            <template #title>
              <div class="mx-auto mb-4 flex items-center justify-center">
                <AppIcon
                  :icon="item.icon"
                  class="h-12 w-12 text-gray-600 dark:text-gray-400"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
                <span class="pb-2 border-b-3 border-red-600">{{ item.title }}</span>
              </h3>
            </template>
            <template #description>
              <p class="text-center text-gray-600 dark:text-gray-400 font-medium pt-6">
                {{ item.description }}
              </p>
            </template>
          </UPageFeature>
        </UPageGrid>
      </UContainer>
    </UPageSection>

    <UPageSection
      title="Instituições que escolheram nossa expertise"
      description="Empresas da área da saúde que confiam no nosso trabalho e constroem resultados conosco"
    >
      <UMarquee
        :ui="{ root: '[--duration:80s]' }"
        pause-on-hover
        overlay
      >
        <UTooltip
          v-for="logo in logosSaude"
          :key="logo.name"
          :text="logo.name"
        >
          <img
            :src="logo.src"
            :alt="logo.name"
            loading="lazy"
            class="
              h-10
              sm:h-12
              md:h-14
              w-auto
              grayscale
              opacity-80
              transition-all
              duration-300
              ease-in-out
              hover:grayscale-0
              hover:opacity-100
            "
          />
        </UTooltip>
      </UMarquee>
    </UPageSection>

    <UPageSection
      title="Quem confia no nosso trabalho"
      description="Instituições de diferentes segmentos que fazem parte da nossa trajetória."
    >
      <UMarquee
        :ui="{ root: '[--duration:60s]' }"
        pause-on-hover
        reverse
        overlay
      >
        <UTooltip
          v-for="logo in logosComercial"
          :key="logo.name"
          :text="logo.name"
        >
          <img
            :src="logo.src"
            :alt="logo.name"
            loading="lazy"
            class="
              h-10
              sm:h-12
              md:h-14
              w-auto
              grayscale
              opacity-80
              transition-all
              duration-300
              ease-in-out
              hover:grayscale-0
              hover:opacity-100
            "
          />
        </UTooltip>
      </UMarquee>
    </UPageSection>

    <UPageSection>
      <AppCounterStats />
    </UPageSection>

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
  </NuxtLayout>
</template>
