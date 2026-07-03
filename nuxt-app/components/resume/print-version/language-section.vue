<template>
  <section class="section-block">
    <ResumePrintVersionSectionTitle
      :title="sectionTitle"
      :icon="ResumePrintVersionIconsGlobeIcon"
    />

    <div class="lang-list">
      <div v-for="language in printLanguages" :key="language.name" class="lang-row">
        <span>{{ language.name }}</span>
        <span>{{ language.level }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ResumePrintVersionIconsGlobeIcon from './icons/globe-icon.vue'
import { useLanguageContentStore, type PrintLanguageItem } from '~/stores/languageContentStore'
import { resumeLabels } from '~/constants/ui-labels'

const { locale } = useI18n()
const languageContentStore = useLanguageContentStore()

await useAsyncData('resume-print-languages', async () => {
  return await languageContentStore.fetchData(locale.value)
}, {
  watch: [locale]
})

const printLanguages = computed<PrintLanguageItem[]>(() => {
  return languageContentStore.getPrintLanguages(locale.value)
})

const activeLocale = computed<'fr' | 'en'>(() => {
  return locale.value === 'fr' ? 'fr' : 'en'
})

const sectionTitle = computed(() => {
  return resumeLabels.titleLanguages[activeLocale.value]
})
</script>

<style scoped>
.section-block {
  margin-bottom: 18px;
}

.lang-list {
  display: grid;
  gap: 5px;
}

.lang-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.74rem;
  color: #1e293b;
}

.lang-row span:last-child {
  color: #64748b;
}

@media print {
  .section-block {
    margin-bottom: 12px;
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
