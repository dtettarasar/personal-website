<!-- components/sections/resume-intro.vue -->
<template>

    <div class="text-lg md:text-xl text-slate-700 leading-relaxed border-l-4 border-emerald-500 pl-4">
    
        <!-- Zone d'erreur ou de chargement si nécessaire (optionnel mais propre) -->
        <div v-if="resumeIntroStore.error" class="text-red-400 text-center py-4">
        {{ resumeIntroStore.error }}
        </div>
    
        <!-- Affichage des paragraphes -->
        <p 
        v-for="(paragraph, index) in paragraphs" 
        :key="index" 
        class="my-2 md:my-4" 
        v-html="paragraph"
        ></p>
    
    </div>

</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useResumeIntroStore } from '~/stores/resumeIntroStore'

const { locale } = useI18n()
const resumeIntroStore = useResumeIntroStore()

// Récupération SSR + Watch automatique au clic FR/EN
await useAsyncData('resume-intro-text', () => resumeIntroStore.fetchData(locale.value), {
  watch: [locale]
})

// Propriété calculée pour le rendu
const paragraphs = computed(() => resumeIntroStore.dataByLocale[locale.value] || [])

</script>