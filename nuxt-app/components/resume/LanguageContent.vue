<template>
  
  <div class="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center">
    
    <div class="language-card p-4 sm:p-6">
      <img 
        src="/img/language/france-croissant.png" 
        alt="Croissant pour la France" 
        
        class="size-[100px] md:size-[120px] lg:size-[140px] mx-auto mb-2"
      >

      <div :class="languageSeparatorClasses"></div>
      
      <p class="text-lg sm:text-xl font-semibold text-slate-800 mt-2">Français</p>
      <p class="text-sm sm:text-md text-emerald-600">Langue Maternelle</p>
    </div>

    <div class="language-card p-4 sm:p-6">
      <img 
        src="/img/language/uk-afternoon-tea.png" 
        alt="Thé et muffin pour l'Anglais" 
        
        class="size-[100px] md:size-[120px] lg:size-[140px] mx-auto mb-2"
      >

      <div :class="languageSeparatorClasses"></div>

      <p class="text-lg sm:text-xl font-semibold text-slate-800 mt-2">Anglais</p>
      <p class="text-sm sm:text-md text-emerald-600">Niveau Professionnel</p>
    </div>

  </div>

</template>

<script setup>

// Séparateur fin pour l'esthétique
const languageSeparatorClasses = [
    'w-[50%]', // Un peu plus étroit que le 70% de l'XP
    'h-[2px]', // Plus fin
    'rounded-full',
    'bg-emerald-600', // Assurer la couleur d'accentuation
    'mx-auto',
    'my-2',
]

// ... (votre script sans props)
</script>

<style scoped>
/* Styles inchangés */
.language-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}
</style>