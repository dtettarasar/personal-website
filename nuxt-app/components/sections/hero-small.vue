<template>

    <section id="hero" class="flex flex-col justify-center items-center py-5">

        <div class="flex flex-col items-center">
            
            <Icon :name="icon" class="w-10 h-10 text-white text-2xl md:text-3xl" />

            <h1 class="text-3xl md:text-5xl" >Resume</h1>

        </div>

    </section>

</template>

<style scoped>

</style>

<script setup>

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