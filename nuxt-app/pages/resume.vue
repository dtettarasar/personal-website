<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div class="mt-4" :class="containerStyleClasses">

    <TextSectionTitleAlt icon="mdi:briefcase" title="Experiences"/>

  </div>

  <div :class="containerStyleClasses">

    <p class="text-lg md:text-xl text-slate-700 leading-relaxed border-l-4 border-emerald-500 pl-4">
      Over the years, I've worked at the crossroads of web production, design, and technical leadership: architecting WordPress platforms for enterprise clients, managing cross-functional teams, and translating business requirements into robust technical solutions.
      
      Today, I combine this strategic experience with hands-on fullstack development: <strong>Technical Product Owner</strong> and <strong>Fullstack Developer</strong> specializing in <strong>Vue / Nuxt</strong>, <strong>full-stack architecture</strong>, and <strong>shipping products that scale</strong>.
    </p>

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

  const containerStyleClasses = [
    'container',
    'p-4',
    'mx-auto',
  ]

</script>
