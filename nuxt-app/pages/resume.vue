<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div :class="containerStyleClasses">

    <TextSectionTitleAlt icon="mdi:briefcase" title="Experiences"/>

  </div>

  <div :class="containerStyleClasses">

    <p>
      Over the years, I’ve worked at the crossroads of web production, design and project management: creating and managing WordPress websites, integrating brand guidelines into responsive layouts, designing visuals, and coordinating with developers and marketing teams.
      Today, I build on this experience as a frontend developer focused on Vue / Nuxt, UI/UX, accessibility and performance.
    </p>

  </div>

  <resume-xp-section></resume-xp-section>

  <div :class="containerStyleClasses">

    <text-section-title-alt icon="mdi:school" title="Education & Certifications"></text-section-title-alt>

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

</template>

<script setup lang="ts">

  const containerStyleClasses = [
    'container',
    'p-4',
    'mx-auto',
  ]

</script>
