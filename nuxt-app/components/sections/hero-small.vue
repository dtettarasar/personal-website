<!-- components/sections/hero-small.vue -->
<template>
  <section id="hero" class="flex flex-col justify-center items-center py-6 animate-gradient-move w-full">
    <div class="flex flex-col items-center">
      
      <!-- Icône -->
      <div class="flex drop-shadow-emerald-glow">
        <Icon 
          :name="icon" 
          class="text-4xl md:text-6xl text-emerald-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.4)] mb-2" 
        />
      </div>

      <!-- Titre dynamique avec son curseur -->
      <h1 :class="titleClasses">
        {{ title }}<span class="animate-pulse">_</span>
      </h1>

    </div>
  </section>
</template>

<script setup lang="ts">
// Typage strict des props en TypeScript
defineProps<{
  title: string
  icon?: string // Optionnelle, prendra la valeur par défaut dans le template si absente
}>()

// Classes CSS centralisées
const titleClasses = [
  'text-4xl',
  'md:text-5xl',
  'font-mono',
  'text-emerald-400',
  'drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]'
]
</script>

<style scoped>
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
</style>