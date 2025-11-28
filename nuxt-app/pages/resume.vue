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
      :companyLogoSrc="xp.companyLogoSrc"
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
      companyName: "DII / POLITICO",
      companyVenue: "Paris, France",
      jobTitle: "Web & CRM Manager",
      period:"Jan 2018 - Dec 2024",
      companyLogoSrc:"/img/resume/experiences/company-logo-dii.png",
      jobMissions: [
        "WordPress website creation and management: integration, mock-ups, redesigns, UX optimization",
        "Wireframe and prototype design (Figma)",
        "Visual production: banners, retouching, event branding.",
        "SEO and analytics: optimization, performance monitoring, content strategy.",
        "Technical project management: writing specs, Jira tickets, QA, coordination with the dev team.",
        "Salesforce administration: automation, internal support, reporting.",
        "Cross-functional management between design, technical, and business teams.",
      ]
    },
    {
      companyName: "ABUS France",
      companyVenue: "Villeneuve-le-Roi, France",
      jobTitle: "Digital Marketing Executive",
      period:"Feb 2016 - Jun 2017",
      companyLogoSrc:"/img/resume/experiences/company-logo-abus.png",
      jobMissions: [
        "Management of the FR website: product pages, content, formatting",
        "Graphic design (photos, visuals, infographics)",
        "Writing & translation for the website, press releases, web media",
        "SEO & analytics monitoring",
        "Optimization of the Amazon.fr catalog"
      ]
    },
    {
      companyName: "Pierre & Vacances",
      companyVenue: "Paris, France",
      jobTitle: "Social Media Manager Assistant",
      period:"Feb 2015 - Aug 2015",
      companyLogoSrc:"/img/resume/experiences/company-logo-pvcp.png",
      jobMissions: [
        "Writing articles & SEO optimization",
        "Creating visuals for social media",
        "Managing and planning Facebook/Twitter posts",
        "Reporting & campaign analysis",
        "Managing the group's YouTube channel",
      ]
    },
    {
      companyName: "Btown Ltd",
      companyVenue: "New Delhi, India",
      jobTitle: "Web Content Writer",
      period:"Apr 2014 - Aug 2014",
      companyLogoSrc:"/img/resume/experiences/company-logo-btown.png",
      jobMissions: [
        "Article writing & SEO (WordPress, Yoast SEO)",
        "Infographic creation + photo editing",
        "Facebook/Twitter posts & engagement",
      ]
    }
  ]

</script>
