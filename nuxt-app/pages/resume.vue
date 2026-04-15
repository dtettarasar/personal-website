<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div class="mt-4" :class="containerStyleClasses">

    <TextSectionTitleAlt icon="mdi:briefcase" title="Experiences"/>

  </div>

  <div :class="containerStyleClasses">

    <p class="text-lg md:text-xl text-slate-700 leading-relaxed border-l-4 border-emerald-500 pl-4">
      Over the years, I've worked at the crossroads of web development, design, and technical project management: 
      building WordPress platforms for enterprise clients, developing custom interfaces, and managing the complete 
      development lifecycle from conception to production.
      
      Today, I combine this hands-on experience with modern frontend development: <strong>Frontend Developer</strong> 
      specializing in <strong>Vue.js / Nuxt.js</strong>, with strong product sense and the ability to 
      <strong>build applications that are both technically excellent and strategically aligned</strong>.
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
