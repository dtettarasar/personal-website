<template>
  
  <div class="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center">
    
    <div class="language-card p-4 sm:p-6 bg-slate-800 rounded-lg border-2 border-slate-700 shadow-xl transition-shadow hover:shadow-emerald-500/50">
      <img 
        src="/img/language/france-croissant.png" 
        alt="Croissant pour la France" 
        
        class="size-[100px] md:size-[120px] lg:size-[140px] mx-auto mb-2"
      >

      <div :class="languageSeparatorClasses"></div>
      
      <p class="text-lg sm:text-xl font-semibold text-white mt-2">French</p>
      <p class="text-sm sm:text-md text-emerald-400">Native Language</p>

    </div>

    <div class="language-card p-4 sm:p-6 bg-slate-800 rounded-lg border-2 border-slate-700 shadow-xl transition-shadow hover:shadow-emerald-500/50">
      <img 
        src="/img/language/uk-afternoon-tea.png" 
        alt="Thé et muffin pour l'Anglais" 
        
        class="size-[100px] md:size-[120px] lg:size-[140px] mx-auto mb-2"
      >

      <div :class="languageSeparatorClasses"></div>

      <p class="text-lg sm:text-xl font-semibold text-white mt-2">English</p>
      <p class="text-sm sm:text-md text-emerald-400">Business Level</p>
      
    </div>

  </div>

</template>

<script setup>

// Séparateur fin pour l'esthétique
const languageSeparatorClasses = [
    'w-[50%]',
    'h-[2px]',
    'rounded-full',
    'bg-emerald-400', // 💥 COULEUR AJUSTÉE pour mieux ressortir sur bg-slate-800
    'mx-auto',
    'my-2',
]
</script>

<style scoped>
/* Le style CSS reste très simple et n'a pas besoin de modifications majeures */
.language-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 1rem; (géré par p-4 sm:p-6 dans le template) */
}
</style>