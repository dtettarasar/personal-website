<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useExperienceStore } from '@/stores/experienceStore'

  const containerStyleClasses = [
    'container',
    'p-4',
    'mx-auto',
  ]

  const { locale } = useI18n()
  const experienceStore = useExperienceStore()

  await useAsyncData('experience', () => experienceStore.fetchData(locale.value), {
    watch: [locale]
  })

  // 4. AJUSTEMENT : La propriété calculée qui va chercher le bon tableau dans le dictionnaire Pinia
  const experiences = computed(() => experienceStore.dataByLocale[locale.value] || [])

</script>

<template>

    <div 
        :class="containerStyleClasses" 
        class="flex flex-row gap-8 flex-wrap justify-center"
    >

        <resume-xp-content
          v-for="(xp, index) in experiences"
          :key="index"
          v-bind="xp"
        ></resume-xp-content>

    </div>

</template>