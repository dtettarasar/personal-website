<script setup lang="ts">

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

    const skillSections = [

        {
            title: "Frontend",
            icon: "mdi:star-four-points",
            items: [
            { icon: "mdi:vuejs", label: "Vue.js" },
            { icon: "mdi:nuxt", label: "Nuxt.js" },
            { icon: "mdi:tailwind", label: "Tailwind CSS" }
            ]
        },
        {
            title: "Web Essentials",
            icon: "mdi:code-tags",
            items: [
            { icon: "mdi:language-html5", label: "HTML5" },
            { icon: "mdi:language-css3", label: "CSS3" },
            { icon: "mdi:language-javascript", label: "JavaScript" },
            { icon: "mdi:bootstrap", label: "Bootstrap" }
            ]
        },
        // etc...

    ]

</script>

<template>

    <div :class="containerStyleClasses">

        <div id="skill-container" class="animate-gradient-move rounded-lg p-6" >

            <div v-for="section in skillSections" :key="section.title" class="mb-8">

                <text-section-title-lite-white
                    :title="section.title"
                />

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">

                    <resume-skill-content
                        v-for="skill in section.items"
                        :key="skill.label"
                        :icon="skill.icon"
                        :label="skill.label"
                    />

                </div>

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