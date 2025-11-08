<template>

    <section id="hero" class="flex flex-col justify-center items-center py-5">

        <div class="flex flex-col items-center">
            
            <Icon :name="icon" class="text-2xl md:text-4xl text-emerald-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]" />

            <h1 :class="titleClasses" >Resume<span class="animate-pulse">_</span></h1>

        </div>

    </section>

</template>

<style scoped>

</style>

<script setup>

const titleClasses = [

    'text-3xl',
    'md:text-5xl',
    'font-mono',
    'text-emerald-400',
    'drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]'

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