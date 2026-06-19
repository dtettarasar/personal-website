<script setup lang="ts">

    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useEducationsStore } from '@/stores/educationsStore'

    const { locale } = useI18n()
    const educationsStore = useEducationsStore();
    await useAsyncData('educations', () => educationsStore.fetchData(locale.value), {
        watch: [locale]
    })

    // 4. AJUSTEMENT : La propriété calculée qui va chercher le bon tableau dans le dictionnaire Pinia
    const educations = computed(() => educationsStore.dataByLocale[locale.value] || [])

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

</script>

<template>
  <div 
    :class="containerStyleClasses" 
    class="flex flex-row gap-8 flex-wrap justify-center"
  >

    <resume-edu-content 
      v-for="(edu, index) in educations"
      :key="index"
      v-bind="edu"
    ></resume-edu-content>

  </div>
</template>