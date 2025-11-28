<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div class="container p-4 mx-auto text-white md:text-lg">

    <text-section-title-alt icon="mdi:briefcase" title="Experiences"></text-section-title-alt>

  </div>

  <div class="container p-4 mx-auto flex flex-row gap-8 flex-wrap justify-center"> 

    <resume-xp-content
      companyName="Drive Innovation Insights"
      companyVenue="Paris, France"
      jobTitle="Webmaster"
      :jobMissions="['test1', 'test2']"
    ></resume-xp-content>

    <resume-xp-content
      companyName="Drive Innovation Insights"
      companyVenue="Paris, France"
      jobTitle="Web Project Manager"
    ></resume-xp-content>

    <resume-xp-content
      companyName="Drive Innovation Insights"
      companyVenue="Paris, France"
      jobTitle="CRM Manager"
    ></resume-xp-content>

  </div>

  <div class="container p-4 mx-auto text-white md:text-lg">

    <text-section-title-alt icon="mdi:school" title="Education"></text-section-title-alt>

  </div>

  <!--<other-test-mongo-db></other-test-mongo-db>-->

</template>

<script setup lang="ts">

</script>
