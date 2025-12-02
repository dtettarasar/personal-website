<template>
  <div :class="skillClasses">
    <Icon 
      :name="icon" 
      class="size-[40px] md:size-[50px] lg:size-[60px]
             text-white 
             transition-all duration-300
             group-hover:text-black"
    />

    <p 
      class="text-lg mt-2 opacity-0
             transition-all duration-300
             group-hover:opacity-100 text-black"
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
  'bg-slate-800',
  'border-3',
  'border-emerald-400',
  'rounded-xl',
  'transition-all',
  'duration-300',

  // Hover effects
  'hover:bg-emerald-400',
  'hover:shadow-[0_0_15px_rgba(74,222,128,0.6)]',
  'animate-none', // de base aucun pulse

  // Little pulse on hover
  'hover:animate-borderPulse'
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

.hover\:animate-borderPulse:hover {
  animation: borderPulse 2.8s infinite ease-in-out;
}
</style>
