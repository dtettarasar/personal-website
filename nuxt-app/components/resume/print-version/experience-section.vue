<template>
  <section class="section-block">
    <ResumePrintVersionSectionTitle
      title="Experience"
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