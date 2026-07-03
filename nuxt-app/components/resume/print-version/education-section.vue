<template>
  <section class="section-block">
    <ResumePrintVersionSectionTitle
      :title="sectionTitle"
      :icon="ResumePrintVersionIconsGlobeIcon"
    />

    <ResumePrintVersionEducationContent
      v-for="education in printEducations"
      :key="`${education.title}-${education.year}-${education.issuer}`"
      v-bind="education"
    />
  </section>
</template>

<script setup lang="ts">
import ResumePrintVersionIconsGlobeIcon from './icons/globe-icon.vue'
import { useEducationsStore, type PrintEducationItem } from '~/stores/educationsStore'
import { resumeLabels } from '~/constants/ui-labels'

const { locale } = useI18n()
const educationsStore = useEducationsStore()

await useAsyncData('resume-print-educations', async () => {
  return await educationsStore.fetchData(locale.value)
}, {
  watch: [locale]
})

const printEducations = computed<PrintEducationItem[]>(() => {
  return educationsStore.getPrintEducations(locale.value)
})

const activeLocale = computed<'fr' | 'en'>(() => {
  return locale.value === 'fr' ? 'fr' : 'en'
})

const sectionTitle = computed(() => {
  return activeLocale.value === 'fr'
    ? resumeLabels.titleEducation.fr
    : resumeLabels.titleEducation.en
})

</script>

<style scoped>
.section-block {
  margin-bottom: 18px;
}

@media print {
  .section-block {
    margin-bottom: 8px;
    break-inside: auto;
    page-break-inside: auto;
  }
}
</style>