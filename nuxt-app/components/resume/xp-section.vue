<script setup lang="ts">

  const containerStyleClasses = [
    'container',
    'p-4',
    'mx-auto',
  ]

  const experiences = [

    {
      companyName: "DII / POLITICO",
      companyVenue: "Paris, France",
      jobTitle: "Project Manager Web & CRM",
      period: "Jan 2018 - Dec 2024",
      companyLogoSrc: "/img/resume/experiences/company-logo-dii.png",
      jobMissions: [
        "<strong>Web Development & CMS Architecture:</strong> Managed a WordPress Multisite network for high-profile clients (Uber, KPMG, Politico). Responsible for 'Pixel Perfect' responsive integration (HTML5/CSS3/JS) and performance optimization (Core Web Vitals).",
        "<strong>Salesforce Engineering (LWC):</strong> Developed front-end adjustments on Lightning Web Components. Managed the full technical lifecycle: UI fixes, logic updates, and Git-based deployments (staging/production).",
        "<strong>Technical Project Management:</strong> Bridged the gap between business needs and technical execution. Wrote functional specifications, managed Jira workflows, and led Quality Assurance (QA) testing.",
        "<strong>DevOps & Infrastructure:</strong> Orchestrated domain lifecycles (Gandi), DNS configurations, and security layers via Cloudflare.",
        "<strong>Product Design:</strong> Crafted interactive prototypes and functional wireframes using Figma to streamline the development process."
      ]
    },
    {
      companyName: "ABUS France",
      companyVenue: "Villeneuve-le-Roi, France",
      jobTitle: "Digital Marketing & Web Referent",
      period: "Feb 2016 - Jun 2017",
      companyLogoSrc: "/img/resume/experiences/company-logo-abus.png",
      jobMissions: [
        "<strong>CMS Administration:</strong> Managed the French product catalog using eZ Publish, focusing on structural content updates and technical SEO.",
        "<strong>Technical Interface:</strong> Acted as the primary point of contact for the German HQ development team, managing bug tracking and feature requests.",
        "<strong>Front-End Integration:</strong> Developed and styled custom landing pages and marketing assets using HTML/CSS.",
        "<strong>Digital Assets:</strong> Created complex infographics and visual branding for the French market's digital presence."
      ]
    },
    {
      companyName: "Pierre & Vacances Center Parcs",
      companyVenue: "Paris, France",
      jobTitle: "Assistant Digital Manager",
      period: "Feb 2015 - Aug 2015",
      companyLogoSrc: "/img/resume/experiences/company-logo-pvcp.png",
      jobMissions: [
        "<strong>SEO & Content Strategy:</strong> Optimized editorial content for the group's web portals to increase organic reach.",
        "<strong>Digital Asset Management:</strong> Produced visual content for social campaigns and managed the corporate YouTube channel architecture.",
        "<strong>Performance Reporting:</strong> Monitored key engagement metrics and provided data-driven insights for digital marketing campaigns."
      ]
    },
    {
      companyName: "Btown Ltd",
      companyVenue: "New Delhi, India",
      jobTitle: "Web Content Specialist",
      period: "Apr 2014 - Aug 2014",
      companyLogoSrc: "/img/resume/experiences/company-logo-btown.png",
      jobMissions: [
        "<strong>International SEO:</strong> Content creation and optimization using WordPress/Yoast SEO in a multicultural environment.",
        "<strong>Visual Storytelling:</strong> Designed infographics and digital assets to support editorial growth."
      ]
    }

  ]

</script>

<template>

    <div 
        :class="containerStyleClasses" 
        class="flex flex-row gap-8 flex-wrap justify-center"
    >

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

</template>