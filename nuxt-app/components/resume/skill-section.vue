<script setup lang="ts">

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

    const separatorClasses = [

        'w-[70%]',
        'h-[4px]',
        'rounded-full',
        'bg-white',
        'shadow-[0_0_10px_rgba(255,255,255,0.6)]',
        'mx-auto',
        'my-2',

    ]

</script>

<template>

    <div :class="containerStyleClasses">

        <div id="skill-container" class="animate-gradient-move rounded-lg h-[500px]" >

            <div class="flex flex-col md:flex-row items-center justify-center gap-2 py-4">

                <Icon 
                    name="mdi:star" 
                    class="size-[30px] md:size-[40px] lg:size-[60px] text-white" 
                />

                <p class="text-white text-lg md:text-xl lg:text-2xl flex-shrink-0">Computing</p>

            </div>

            <div :class="separatorClasses"></div>

            <div class="flex flex-col md:flex-row items-center justify-center gap-2 py-4">

                <Icon 
                    name="mdi:star" 
                    class="size-[30px] md:size-[40px] lg:size-[60px] text-white" 
                />

                <p class="text-white text-lg md:text-xl lg:text-2xl flex-shrink-0">Language</p>

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