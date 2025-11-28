<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div class="container p-4 mx-auto text-white md:text-lg">

    <text-section-title-alt icon="mdi:briefcase" title="Experiences"></text-section-title-alt>

  </div>

  <div class="container p-4 mx-auto flex flex-row gap-8 flex-wrap justify-center"> 

    <resume-xp-content
      v-for="(xp, index) in experiences"
      :key="index"
      :companyName="xp.companyName"
      :companyVenue="xp.companyVenue"
      :jobTitle="xp.jobTitle"
      :jobMissions="xp.jobMissions"
      :period="xp.period"
    ></resume-xp-content>

  </div>

  <div class="container p-4 mx-auto text-white md:text-lg">

    <text-section-title-alt icon="mdi:school" title="Education"></text-section-title-alt>

  </div>

  <!--<other-test-mongo-db></other-test-mongo-db>-->

</template>

<script setup lang="ts">

  const experiences = [
    {
      companyName: "Drive Innovation Insights",
      companyVenue: "Paris, France",
      jobTitle: "Webmaster",
      period:" Jan 2020 - Dec 2022",
      jobMissions: [
        "websites creation and content management, using WordPress",
        "graphic design (photo-editing, banners, visual elements for social media...)",
        "stats monitoring in Google Analytics",
        "Salesforce administration and internal support"
      ]
    },
    {
      companyName: "Drive Innovation Insights",
      companyVenue: "Paris, France",
      jobTitle: "Web Project Manager",
      period:" Jan 2020 - Dec 2022",
      jobMissions: [
        "project management for clients' websites creation",
        "coordination between clients, developers and designers",
        "ensuring deadlines and quality standards are met"
      ]
    },
    {
      companyName: "Drive Innovation Insights",
      companyVenue: "Paris, France",
      jobTitle: "CRM Manager",
      period:" Jan 2020 - Dec 2022",
      jobMissions: [
        "managing and optimizing the company's CRM system",
        "training staff on CRM best practices",
        "analyzing customer data to improve marketing strategies"
      ]
    }
  ]

</script>
