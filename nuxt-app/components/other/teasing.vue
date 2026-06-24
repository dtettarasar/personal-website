<!-- components/shared/coming-soon.vue -->
<template>
  <div class="py-10 text-center flex flex-col gap-2">
    <!-- Titre -->
    <p class="text-emerald-400 text-3xl font-bold drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]">
      {{ t.title }}
    </p>
    
    <!-- Message de teasing -->
    <p class="text-slate-300 text-lg opacity-80 px-4">
      {{ t.message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Traductions locales encapsulées dans le composant temporaire
const t = computed(() => {
  const isFr = locale.value === 'fr'
  
  return {
    title: isFr ? 'Zone en chantier' : 'Coming Soon',
    message: isFr 
      ? 'Nouveau contenu en cours de forge. Patience, l’équipe ! 🛠️✨' 
      : 'New content currently in the forge. Stand by, fam 🛠️✨'
  }
})
</script>