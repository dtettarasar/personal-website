<script setup lang="ts">

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

</script>

<template>

    <div :class="containerStyleClasses">

        <div id="skill-container" class="animate-gradient-move rounded-lg p-6" >

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                <resume-skill-content icon="mdi:vuejs" label="Vue.js" ></resume-skill-content>

                <resume-skill-content icon="mdi:nuxt" label="Nuxt.js" ></resume-skill-content>

                <resume-skill-content icon="mdi:tailwind" label="Tailwind CSS" ></resume-skill-content>

            </div>

        </div>
        
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