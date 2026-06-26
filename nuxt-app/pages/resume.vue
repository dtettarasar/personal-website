<template>

  <sections-hero-small icon="mdi:card-account-details" :title="pageTitle" ></sections-hero-small>

  <div :class="containerStyleClasses">

    <resume-intro-section></resume-intro-section>

  </div>

  <div class="mt-4" :class="containerStyleClasses">

    <TextSectionTitleAlt icon="mdi:briefcase" :title="currentTitles.experiences"/>

  </div>

  <resume-xp-section></resume-xp-section>

  <div :class="containerStyleClasses">

    <text-section-title-alt icon="material-symbols:school-rounded" :title="currentTitles.education"></text-section-title-alt>

  </div>

  <resume-edu-section></resume-edu-section>

  <div :class="containerStyleClasses">

    <text-section-title-alt icon="mdi:tools" :title="currentTitles.skills"></text-section-title-alt>

  </div>

  <resume-skill-section></resume-skill-section>

  <!--<other-test-mongo-db></other-test-mongo-db>-->

  <div :class="containerStyleClasses">

    <TextSectionTitleAlt icon="majesticons:translate" :title="currentTitles.languages"/>

  </div>

  <div class="mb-4" :class="containerStyleClasses">

    <ResumeLanguageContent />

  </div>

</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { resumeLabels, navLabels } from '~/constants/ui-labels'

const { locale } = useI18n()

// 🛠️ FIX TYPESCRIPT : En écrivant 'fr' : 'en', TS infère le type strict 'fr' | 'en'
const currentTitles = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  
  return {
    experiences: resumeLabels.titleExperiences[lang],
    education: resumeLabels.titleEducation[lang],
    skills: resumeLabels.titleSkills[lang],
    languages: resumeLabels.titleLanguages[lang],
  }
})

const pageTitle = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  return navLabels.resume[lang]
})

const containerStyleClasses = [
  'container',
  'p-4',
  'mx-auto',
]

</script>
