<template>

    <section id="hero" class="flex flex-col justify-center items-center py-5 animate-gradient-move">

        <div class="flex flex-col items-center">
          
            <div class="flex drop-shadow-emerald-glow">
              <Icon :name="icon" class="text-4xl md:text-6xl text-emerald-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.4)] mb-2" />
            </div>

            <h1 :class="titleClasses" >{{ title }}<span class="animate-pulse">_</span></h1>

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

const titleClasses = [

    'text-4xl',
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