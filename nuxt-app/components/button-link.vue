<template>

    <NuxtLink class="w-fit p-4 mb-2 flex flex-col items-center bg-slate-800 border-3 border-emerald-400 rounded-xl hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.6)] md:text-2xl lg:text-3xl text-white hover:text-black transition-all duration-300" :to="link">
        <Icon :name="icon" class="w-10 h-10" />
        {{ label }}
    </NuxtLink>    

</template>

<script setup>

defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'mdi:star' // icône par défaut si aucune n’est passée
  },
  link: {
    type: String,
    required: true
  }
})

</script>