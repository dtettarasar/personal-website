<!-- components/sections/hero-big.vue -->
<template>
  <section
    id="hero"
    class="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden animate-gradient-move"
  >
    <!-- Contenu principal (Affiché uniquement si les données sont prêtes) -->
    <div v-if="heroData" class="space-y-8 z-10 flex flex-col items-center px-4">
      
      <!-- Photo dynamique avec effet néon vert -->
      <div class="relative">
        <img
          :src="heroData.img"
          class="w-32 lg:w-48 rounded-full border-4 border-emerald-400 shadow-[0_0_25px_rgba(74,222,128,0.5)] animate-borderPulse"
          :alt="heroData.imgAlt"
        />
      </div>

      <!-- Titre principal dynamique -->
      <h1
        class="font-mono tracking-[0.3em] text-emerald-400 text-3xl md:text-5xl lg:text-6xl uppercase drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]"
      >
        {{ heroData.title }}<span class="animate-pulse">_</span>
      </h1>

      <!-- Sous-titre dynamique -->
      <p class="text-lg md:text-2xl lg:text-3xl font-light text-gray-200">
        {{ heroData.subtitle }}
        <span class="block md:inline"> · {{ heroData.specialty }}</span>
      </p>

      <!-- Icônes dynamiques -->
      <div class="flex justify-center items-center gap-8 pt-6">

        <a :href="heroData.links.email">
          <Icon name="mdi:mail-ru" class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors" />
        </a>

        <a :href="heroData.links.linkedin" target="_blank">
          <Icon name="fa7-brands:linkedin" class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors" />
        </a>

        <a :href="heroData.links.github" target="_blank">
          <Icon name="fa7-brands:github" class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors" />
        </a>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useHeroStore } from '~/stores/heroStore'

  const { locale } = useI18n()
  const heroStore = useHeroStore()

  // Récupération SSR avec écoute du changement de langue
  await useAsyncData('hero-data', async () => {
    return await heroStore.fetchData(locale.value)
  }, {
    watch: [locale]
  })

  // Raccourci calculé pour l'affichage dans le template
  const heroData = computed(() => heroStore.dataByLocale[locale.value])
</script>

<style scoped>

/*
 * Nous laissons le gradient CSS complexe ici, car il est difficile
 * de le recréer avec les utilitaires de base de Tailwind.
 * En le laissant ici, il est SCOPED et géré localement.
 */
#hero {
  background: linear-gradient(
    135deg,
    #0d1117,
    #1c2834,
    #223844,
    #234d4d,
    #3aa37f
  );
  background-size: 400% 400%;
}

/* Effet halo vert autour de la photo */
@keyframes borderPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4);
  }
  70% {
    box-shadow: 0 0 25px 15px rgba(74, 222, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}
.animate-borderPulse {
  animation: borderPulse 2.8s infinite ease-in-out;
}

/* Scanlines subtiles */
@keyframes scanlines {
  from { background-position: 0 0; }
  to { background-position: 0 4px; }
}
.animate-scanlines {
  animation: scanlines 0.8s linear infinite;
  background-size: auto 4px;
}

</style>
