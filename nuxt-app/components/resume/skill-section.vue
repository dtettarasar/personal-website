<script setup lang="ts">

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

</script>

<template>

    <div :class="containerStyleClasses">

        <div id="skill-container" class="animate-gradient-move rounded-lg h-[500px]" ></div>
        
    </div>

</template>

<style>

/*
 * Nous laissons le gradient CSS complexe ici, car il est difficile
 * de le recréer avec les utilitaires de base de Tailwind.
 * En le laissant ici, il est SCOPED et géré localement.
 */
#skill-container {
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