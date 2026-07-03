<template>
  <section class="section-block">
    <ResumePrintVersionSectionTitle
      title="Education"
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