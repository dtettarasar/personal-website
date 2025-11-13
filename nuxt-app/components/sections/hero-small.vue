<template>

    <section id="hero" class="flex flex-col justify-center items-center py-5 animate-gradient-move">

        <div class="flex flex-col items-center">
            
            <Icon :name="icon" class="w-10 h-10 text-white text-2xl md:text-3xl" />

            <h1 class="text-3xl md:text-5xl" >Resume</h1>

        </div>

    </section>

</template>

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