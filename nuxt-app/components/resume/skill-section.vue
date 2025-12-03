<script setup lang="ts">

    import { ref } from 'vue'

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

    const skillSections = [

        {
            title: "Frontend – Main Stack",
            icon: "mdi:star-four-points",
            items: [
                { icon: "mdi:vuejs", label: "Vue.js" },
                { icon: "mdi:nuxt", label: "Nuxt.js" },
                { icon: "mdi:tailwind", label: "Tailwind CSS" }
            ]
        },

        {
            title: "Web & Integration",
            icon: "mdi:code-tags",
            items: [
                { icon: "mdi:language-html5", label: "HTML5" },
                { icon: "mdi:language-css3", label: "CSS3" },
                { icon: "mdi:language-javascript", label: "JavaScript" },
                { icon: "mdi:bootstrap", label: "Bootstrap" }
            ]
        },

        {
            title: "Tools & Workflow",
            icon: "carbon:tools-alt",
            items: [
                { icon: "mdi:git", label: "Git" },
                { icon: "mdi:docker", label: "Docker" },
                { icon: "simple-icons:caddy", label: "Caddy" },
                { icon: "mdi:github", label: "GitHub" },
                {icon: "mdi:jira", label: "Jira"},
            ]
        },

        {
            title: "Backend (not my primary focus but operational)",
            icon: "mdi:server-network",
            items: [
                { icon: "mdi:nodejs", label: "Node.js / Express" },
                { icon: "lineicons:mongodb", label: "MongoDB" },
                { icon: "mdi:language-python", label: "Python" },
                { icon: "devicon-plain:django", label: "Django" },
                { icon: "mdi:database", label: "SQL" },
            ]
        },

        {
            title: "CMS & Business Tools",
            icon: "lsicon:marketing-filled",
            items: [
                { icon: "ic:baseline-wordpress", label: "WordPress" },
                { icon: "mdi:salesforce", label: "Salesforce" },
                { icon: "mdi:microsoft-office", label: "Office Suite" },
            ]
        },

        {
            title: "Creative Tools",
            icon: "ion:color-palette",
            items: [
                { icon: "file-icons:gimp", label: "GIMP" },
                { icon: "simple-icons:krita", label: "Krita" },
            ]
        },

    ]

    // 💥 NOUVEAU : État pour l'identifiant de la compétence active
    const activeSkillLabel = ref('')

    const toggleActive = (label: string) => {
        // Si l'élément est déjà actif, désactivez-le (vide la ref)
        if (activeSkillLabel.value === label) {
            activeSkillLabel.value = ''
        } else {
            // Sinon, activez le nouvel élément
            activeSkillLabel.value = label
        }
    }

</script>

<template>

    <div :class="containerStyleClasses">

        <div id="skill-container" class="animate-gradient-move rounded-lg p-6" >

            <div v-for="(section, index) in skillSections" :key="section.title + index" class="mb-8">

                <text-section-title-lite-white
                    :title="section.title"
                    :icon="section.icon"
                />

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">

                    <resume-skill-content
                        v-for="skill in section.items"
                        :key="section.title + '-' + skill.label"
                        :icon="skill.icon"
                        :label="skill.label"

                        :isActive="activeSkillLabel === skill.label"
                        @click="toggleActive(skill.label)"
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