<template>
  <section class="section-block">
    <div class="section-title-row">
      <h2>Experience</h2>
      <span class="rule" />
    </div>

    <ResumePrintVersionExperienceContent
      v-for="experience in printableExperiences"
      :key="`${experience.companyName}-${experience.period}-${experience.jobTitle}`"
      v-bind="experience"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useExperienceStore, type ExperienceItem } from '~/stores/experienceStore'

interface PrintExperienceItem extends ExperienceItem {
  displayOnPrint?: boolean
  jobMissionsShort?: string[]
}

const { locale } = useI18n()
const experienceStore = useExperienceStore()

await useAsyncData('resume-print-experience', async () => {
  return await experienceStore.fetchData(locale.value)
}, {
  watch: [locale]
})

const printableExperiences = computed<PrintExperienceItem[]>(() => {
  const experiences = experienceStore.dataByLocale[locale.value] ?? []

  return (experiences as PrintExperienceItem[]).filter((experience) => {
    return experience.displayOnPrint !== false
  })
})
</script>

<style scoped>
.section-block {
  margin-bottom: 18px;
}

.section-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.section-title-row h2 {
  margin: 0;
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: #0f766e;
}

.rule {
  height: 1px;
  flex: 1;
  background: #e2e8f0;
}

@media print {
  .section-block {
    margin-bottom: 12px;
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>