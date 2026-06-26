<template>
  <div class="container p-4 mx-auto text-white md:text-lg">
    
    <text-section-title 
      icon="mdi:account-circle" 
      :title="currentLabels.aboutMeTitle" 
      class="mb-6"
    ></text-section-title>

    <div v-if="introStore.error" class="text-red-400 text-center py-4">
      {{ introStore.error }}
    </div>

    <p 
      v-for="(paragraph, index) in paragraphs" 
      :key="index" 
      class="my-2 md:my-4" 
      v-html="paragraph"
    ></p>

    <div class="flex flex-wrap flex-row justify-around pt-4">
      <button-link link="/resume" icon="mdi:card-account-details" :label="currentLabels.resumeBtn"></button-link> 
      <button-link link="/portfolio" icon="mdi:application-braces" :label="currentLabels.portfolioBtn"></button-link> 
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntroStore } from '~/stores/introStore'
import { homeLabels } from '~/constants/ui-labels'

const { locale } = useI18n()
const introStore = useIntroStore()

// 🛡️ Récupération SSR sécurisée : on garantit à Nuxt un retour quoi qu'il arrive
await useAsyncData('intro-text', async () => {
  const result = await introStore.fetchData(locale.value)
  return result ?? true
}, {
  watch: [locale]
})

const paragraphs = computed(() => introStore.dataByLocale[locale.value] || [])

// Centralisation de TOUS les labels de l'interface pour cette section
const currentLabels = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  
  return {
    aboutMeTitle: homeLabels.aboutMeTitle[lang],
    resumeBtn: homeLabels.resumeBtn[lang],
    portfolioBtn: homeLabels.portfolioBtn[lang],
  }
})
</script>