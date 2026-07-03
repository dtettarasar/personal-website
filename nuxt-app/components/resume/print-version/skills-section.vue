<template>
  <section class="section-block">
    <ResumePrintVersionSectionTitle
      :title="sectionTitle"
      :icon="ResumePrintVersionIconsGlobeIcon"
    />

    <div v-for="group in printSkills" :key="group.title" class="skill-group">
      <h3 class="group-title">{{ group.title }}</h3>
      <div class="pills">
        <span v-for="item in group.items" :key="`${group.title}-${item.label}`" class="pill">
          {{ item.label }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ResumePrintVersionIconsGlobeIcon from './icons/globe-icon.vue'
import { useSkillsStore, type PrintSkillSection } from '~/stores/skillsStore'
import { resumeLabels } from '~/constants/ui-labels'

const { locale } = useI18n()
const skillsStore = useSkillsStore()

await useAsyncData('resume-print-skills', async () => {
  return await skillsStore.fetchData(locale.value)
}, {
  watch: [locale]
})

const printSkills = computed<PrintSkillSection[]>(() => {
  return skillsStore.getPrintSkills(locale.value)
})

const activeLocale = computed<'fr' | 'en'>(() => {
  return locale.value === 'fr' ? 'fr' : 'en'
})

const sectionTitle = computed(() => {
  return resumeLabels.titleSkills[activeLocale.value]
})
</script>

<style scoped>
.section-block {
  margin-bottom: 18px;
}

.skill-group {
  margin-bottom: 10px;
}

.group-title {
  margin: 0 0 6px;
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: #1e293b;
  color: #ffffff;
  font-size: 0.68rem;
  padding: 3px 8px;
}

@media print {
  .section-block {
    margin-bottom: 12px;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .pill {
    background: #1e293b !important;
    color: #ffffff !important;
    border: 1px solid #1e293b !important;
  }
}
</style>
