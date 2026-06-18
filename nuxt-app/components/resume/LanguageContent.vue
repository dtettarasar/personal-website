<template>
  <div class="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center">

    <!-- 1. AJUSTEMENT : On boucle sur "languages" (la computed) et non plus sur "store.data" -->
    <div 
      v-for="language in languages" 
      :key="language.id"
      class="language-card p-4 sm:p-6 bg-slate-800 rounded-lg border-2 border-slate-700 shadow-xl transition-shadow hover:shadow-emerald-500/50"
    >
      <img 
        :src="language.img" 
        :alt="language.name" 
        class="size-[100px] md:size-[120px] lg:size-[140px] mx-auto mb-2"
      >

      <div :class="languageSeparatorClasses"></div>
      
      <p class="md:text-2xl sm:text-xl font-semibold text-white mt-2">{{ language.name }}</p>
      <p class="md:text-xl sm:text-md text-emerald-400">{{ language.level }}</p>

    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageContentStore } from '@/stores/languageContentStore'

// 2. AJUSTEMENT : On récupère la locale active de l'application
const { locale } = useI18n()
const languageContentStore = useLanguageContentStore()

// 3. AJUSTEMENT : On passe la locale à l'action et on active le "watch" de Nuxt
await useAsyncData('lang-content', () => languageContentStore.fetchData(locale.value), {
  watch: [locale]
})

// 4. AJUSTEMENT : La propriété calculée qui va chercher le bon tableau dans le dictionnaire Pinia
const languages = computed(() => languageContentStore.dataByLocale[locale.value] || [])

// Séparateur fin pour l'esthétique
const languageSeparatorClasses = [
    'w-[50%]',
    'h-[2px]',
    'rounded-full',
    'bg-emerald-400', 
    'mx-auto',
    'my-2',
]
</script>

<style scoped>
.language-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>