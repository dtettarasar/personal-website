<script setup lang="ts">

    import { ref } from 'vue'

    import {useSkillsStore} from '@/stores/skillsStore'

    const skillsStore = useSkillsStore();
    await useAsyncData('skills', () => skillsStore.fetchData())

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
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

            <div v-for="(section, index) in skillsStore.data" :key="section.title + index" class="mb-8">

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