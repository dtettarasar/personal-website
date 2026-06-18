<!-- components/sections/home-intro.vue -->
<template>
  <div class="container p-4 mx-auto text-white md:text-lg">
    
    <!-- Zone d'erreur ou de chargement si nécessaire (optionnel mais propre) -->
    <div v-if="introStore.error" class="text-red-400 text-center py-4">
      {{ introStore.error }}
    </div>

    <!-- Affichage des paragraphes -->
    <p 
      v-for="(paragraph, index) in paragraphs" 
      :key="index" 
      class="my-2 md:my-4" 
      v-html="paragraph"
    ></p>

    <!-- Les boutons d'action de la section -->
    <div class="flex flex-wrap flex-row justify-around pt-4">
      <button-link link="/resume" icon="mdi:card-account-details" label="Resume"></button-link> 
      <button-link link="/portfolio" icon="mdi:application-braces" label="Portfolio"></button-link> 
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntroStore } from '~/stores/introStore'

const { locale } = useI18n()
const introStore = useIntroStore()

// Récupération SSR + Watch automatique au clic FR/EN
await useAsyncData('intro-text', () => introStore.fetchData(locale.value), {
  watch: [locale]
})

// Propriété calculée pour le rendu
const paragraphs = computed(() => introStore.dataByLocale[locale.value] || [])
</script>