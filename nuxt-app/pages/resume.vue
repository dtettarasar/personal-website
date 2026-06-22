<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div class="mt-4" :class="containerStyleClasses">

    <TextSectionTitleAlt icon="mdi:briefcase" :title="currentTitles.experiences"/>

  </div>

  <div :class="containerStyleClasses">

    <resume-intro-section></resume-intro-section>

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

const { locale } = useI18n()

// Objet qui stocke les textes de chaque titre en français et anglais
const sectionTitles = {
  experiences: {
    fr: 'Expériences',
    en: 'Experiences',
  },
  education: {
    fr: 'Éducation & Certifications',
    en: 'Education & Certifications',
  },
  skills: {
    fr: 'Compétences',
    en: 'Skills',
  },
  languages: {
    fr: 'Langues',
    en: 'Language',
  },
}

// 🛠️ FIX TYPESCRIPT : En écrivant 'fr' : 'en', TS infère le type strict 'fr' | 'en'
const currentTitles = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  
  return {
    experiences: sectionTitles.experiences[lang],
    education: sectionTitles.education[lang],
    skills: sectionTitles.skills[lang],
    languages: sectionTitles.languages[lang],
  }
})

const containerStyleClasses = [
  'container',
  'p-4',
  'mx-auto',
]

</script>
