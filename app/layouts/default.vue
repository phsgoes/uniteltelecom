<script lang="ts" setup>
import AppHeader from '~/components/public/AppHeader.vue'
import AppFooter from '~/components/public/AppFooter.vue'
import AppWhatsappFab from '~/components/public/AppWhatsappFab.vue'
const { app } = useRuntimeConfig()

const title = 'Unitel'
const description = 'A Unitel é uma empresa de soluções na área de tecnologia da informação voltada a telecomunicações.'
/*

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/main-logo.png',
  twitterImage: '/images/main-logo.png',
  twitterCard: 'summary_large_image'
})
*/


useHead({
  titleTemplate: pageTitle => pageTitle ? `Unitel - ${pageTitle}` : 'Unitel',
  link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${app.baseURL}apple-touch-icon.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${app.baseURL}favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${app.baseURL}favicon-16x16.png` },
      { rel: 'icon', href: `${app.baseURL}favicon.ico` },
      { rel: 'manifest', href: `${app.baseURL}site.webmanifest` },
    ]
})

useSeoMeta({
  titleTemplate: pageTitle => pageTitle ? `Unitel - ${pageTitle}` : title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${app.baseURL}images/main-logo.png`,
  twitterImage: `${app.baseURL}images/main-logo.png`,
  twitterCard: 'summary_large_image'
})

</script>
<!--
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@nytimes">
  <meta name="twitter:creator" content="@SarahMaslinNir">
  <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral">
  <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.">
  <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg">
-->
<template>
  <AppHeader />
  <GlobalCommandMenu />
  <UMain>
    <slot />
  </UMain>
  <AppWhatsappFab />
  <AppFooter />
</template>
