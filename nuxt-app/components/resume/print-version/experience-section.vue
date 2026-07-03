<template>
  <section class="section-block">
    <ResumePrintVersionSectionTitle
      :title="sectionTitle"
      :icon="ResumePrintVersionIconsGlobeIcon"
    />

    <ResumePrintVersionExperienceContent
      v-for="experience in printableExperiences"
      :key="`${experience.companyName}-${experience.period}-${experience.jobTitle}`"
      v-bind="experience"
    />
  </section>
</template>

<script setup lang="ts">
import ResumePrintVersionIconsGlobeIcon from './icons/globe-icon.vue'
import { useExperienceStore, type PrintExperienceItem } from '~/stores/experienceStore'
import { resumeLabels } from '~/constants/ui-labels'

const { locale } = useI18n()
const experienceStore = useExperienceStore()

await useAsyncData('resume-print-experience', async () => {
  return await experienceStore.fetchData(locale.value)
}, {
  watch: [locale]
})

const printableExperiences = computed<PrintExperienceItem[]>(() => {
  return experienceStore.getPrintExperiences(locale.value)
})

const activeLocale = computed<'fr' | 'en'>(() => {
  return locale.value === 'fr' ? 'fr' : 'en'
})

const sectionTitle = computed(() => {
  return activeLocale.value === 'fr'
    ? resumeLabels.titleExperiences.fr
    : resumeLabels.titleExperiences.en
})
</script>

<style scoped>
.section-block {
  margin-bottom: 18px;
}

@media print {
  .section-block {
    margin-bottom: 12px;
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>