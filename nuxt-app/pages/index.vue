<template>
  
  <div class="bg-slate-800">

    <sections-hero-big></sections-hero-big>

    <text-section-title icon="mdi:account-circle" :title="currentLabels.aboutMeTitle" ></text-section-title>

    <sections-home-intro></sections-home-intro>

  </div>

</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
// On importe notre nouvel objet dédié à la Home
import { homeLabels } from '~/constants/ui-labels'

const { locale } = useI18n()

// Même mécanique de narrowing pour TypeScript et la réactivité
const currentLabels = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  
  return {
    aboutMeTitle: homeLabels.aboutMeTitle[lang],
  }
})

</script>
