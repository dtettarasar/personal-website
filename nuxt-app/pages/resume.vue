<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div class="mt-4" :class="containerStyleClasses">

    <TextSectionTitleAlt icon="mdi:briefcase" title="Experiences"/>

  </div>

  <div :class="containerStyleClasses">

    <div class="border-l-4 border-emerald-500 pl-4">

      <p class="my-2 md:my-4 text-lg md:text-xl text-slate-700 leading-relaxed"
      v-for="paragraph in resumeIntroStore.data"
      :key="paragraph"
      v-html="paragraph"
      ></p>

    </div>


  </div>

  <resume-xp-section></resume-xp-section>

  <div :class="containerStyleClasses">

    <text-section-title-alt icon="material-symbols:school-rounded" title="Education & Certifications"></text-section-title-alt>

  </div>

  <resume-edu-section></resume-edu-section>

  <div :class="containerStyleClasses">

    <text-section-title-alt icon="mdi:tools" title="Skills"></text-section-title-alt>

  </div>

  <resume-skill-section></resume-skill-section>

  <!--<other-test-mongo-db></other-test-mongo-db>-->

  <div :class="containerStyleClasses">

    <TextSectionTitleAlt icon="majesticons:translate" title="Language"/>

  </div>

  <div class="mb-4" :class="containerStyleClasses">

    <ResumeLanguageContent />

  </div>

</template>

<script setup lang="ts">

import { useResumeIntroStore } from '~/stores/resumeIntroStore'

const resumeIntroStore = useResumeIntroStore()

await useAsyncData('resume-intro', () => resumeIntroStore.fetchData())

const containerStyleClasses = [
  'container',
  'p-4',
  'mx-auto',
]

</script>
