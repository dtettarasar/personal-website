<template>
  <div 
    :class="[
      ...skillClasses, // Les classes de base non conditionnelles (group, flex, etc.)
      
      // 💥 Classes dynamiques de l'état actif/hover : Appliquées si isActive VRAI OU si survol
      isActive 
          ? 'bg-emerald-400 shadow-[0_0_15px_rgba(74,222,128,0.6)] is-active-pulse' 
          : 'bg-slate-800 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.6)] hover:animate-borderPulse'
    ]"
  >
    <Icon 
      :name="icon" 
      :class="[
          'size-[40px] md:size-[60px] lg:size-[80px] transition-all duration-300',
          // Couleur de l'icône : Noir si actif, sinon Blanc (avec transition au survol)
          isActive ? 'text-black' : 'text-white group-hover:text-black'
      ]"
    />

    <p 
      :class="[
          'text-lg md:text-2xl mt-2 transition-all duration-300 text-black',
          // Opacité du texte : visible si actif, sinon invisible (avec transition au survol)
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      ]"
    >
      {{ label }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'mdi:star'
  },
  isActive: { // 💥 NOUVEAU : Prop pour l'état actif
      type: Boolean,
      default: false
  }
})

const skillClasses = [
  'group',
  'w-fit',
  'p-4',
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
  // 'bg-slate-800',
  'border-3',
  'border-emerald-400',
  'rounded-xl',
  'transition-all',
  'duration-300',
  'm-auto',

  // Hover effects
  //'hover:bg-emerald-400',
  //'hover:shadow-[0_0_15px_rgba(74,222,128,0.6)]',
  'animate-none', // de base aucun pulse

  // Little pulse on hover
  //'hover:animate-borderPulse'
]

</script>

<style scoped>
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

/* 💥 NOUVEAU : Classe pour forcer l'animation quand isActive est true */
.is-active-pulse {
  animation: borderPulse 2.8s infinite ease-in-out;
}

/* Conservez la règle ci-dessous si vous voulez appliquer le pulse sur le hover desktop */
.hover\:animate-borderPulse:hover {
  animation: borderPulse 2.8s infinite ease-in-out;
}

</style>
