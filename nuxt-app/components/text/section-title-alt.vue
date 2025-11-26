<script setup>

const separatorClasses = [
  'w-full',
  'h-[4px]',
  'rounded-full',
  'bg-emerald-400',
  'shadow-[0_0_10px_rgba(74,222,128,0.8)]'
]

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'mdi:star' // icône par défaut si aucune n’est passée
  }
})

</script>

<style lang="css" scoped>
</style>

<template>

    <div class="bg-slate-800 p-4 lg:p-6 rounded-lg flex flex-row items-center mb-6 gap-3 md:gap-4 lg:gap-6">

        <div class="flex drop-shadow-emerald-glow"> 
            <Icon 
                :name="icon" 
                class="sm:size-[30px] md:size-[40px] lg:size-[60px] text-emerald-400" 
            />
        </div>

        <h2 class="text-white text-xl md:text-2xl lg:text-3xl">
            {{ title }}
        </h2>

        <div :class="separatorClasses"></div>

    </div>

</template>