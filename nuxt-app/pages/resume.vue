<template>
  <div class="bg-slate-800">
    
    <sections-hero-small icon="mdi:card-account-details" title="Resume" ></sections-hero-small>

  </div>

  <div :class="containerStyleClasses">

    <text-section-title-alt icon="mdi:briefcase" title="Experiences"></text-section-title-alt>

  </div>

  <div :class="containerStyleClasses">

    <p>
      Over the years, I’ve worked at the crossroads of web production, design and project management: creating and managing WordPress websites, integrating brand guidelines into responsive layouts, designing visuals, and coordinating with developers and marketing teams.
      Today, I build on this experience as a frontend developer focused on Vue / Nuxt, UI/UX, accessibility and performance.
    </p>

  </div>

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

  <div :class="containerStyleClasses">

    <text-section-title-alt icon="mdi:school" title="Education & Certifications"></text-section-title-alt>

  </div>

  <div 
    :class="containerStyleClasses" 
    class="flex flex-row gap-8 flex-wrap justify-center"
  >

    <resume-edu-content 
      v-for="(edu, index) in educations"
      :key="index"
      :educationLogoSrc="edu.educationLogoSrc"
      :title="edu.title"
      :issuer="edu.issuer"
      :year="edu.year"
      :certificationLink="edu.certificationLink"
      :courseDetails="edu.courseDetails"
    ></resume-edu-content>

  </div>

  <!--<other-test-mongo-db></other-test-mongo-db>-->

</template>

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
      jobTitle: "Web & CRM Manager",
      period:"Jan 2018 - Dec 2024",
      companyLogoSrc:"/img/resume/experiences/company-logo-dii.png",
      jobMissions: [
        "WordPress website creation and management: integration, mock-ups, redesigns, UX optimization",
        "Wireframe and prototype design (Figma)",
        "Visual production: banners, image editing, event branding.",
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
        "Management of the French website (CMS eZ Publish): product pages, content, formatting",
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

  const educations = [

    {
      educationLogoSrc:"/img/resume/educations/harvard-university-logo-0.png",
      title:"Introduction to Programming with Python",
      issuer:"Harvard University",
      year:"2025",
      certificationLink:"https://certificates.cs50.io/eed08f81-a764-4e60-b861-87bb616aacff.pdf?size=letter",
    },

    {
      educationLogoSrc:"/img/resume/educations/fcc_logo.png",
      title:"Back End Development and APIs",
      issuer:"freeCodeCamp",
      year:"2023",
      certificationLink:"https://www.freecodecamp.org/certification/fcc9e0cf531/back-end-development-and-apis",
    },

    {
      educationLogoSrc:"/img/resume/educations/harvard-university-logo-0.png",
      title:"CS50x - Introduction to Computer Science",
      issuer:"Harvard University",
      year:"2021",
      certificationLink:"https://courses.edx.org/certificates/8c91c4feaae048159aab19a913c47924",
    },

    {
      educationLogoSrc:"/img/resume/educations/fcc_logo.png",
      title:"JavaScript Algorithms and Data Structures",
      issuer:"freeCodeCamp",
      year:"2020",
      certificationLink:"https://www.freecodecamp.org/certification/fcc9e0cf531/javascript-algorithms-and-data-structures",
    },

    {
      educationLogoSrc:"/img/resume/educations/fcc_logo.png",
      title:"Responsive Web Design",
      issuer:"freeCodeCamp",
      year:"2020",
      certificationLink:"https://www.freecodecamp.org/certification/fcc9e0cf531/responsive-web-design",
    },

    {
      educationLogoSrc:"/img/resume/educations/diploma-logo-inseec.png",
      title:"Master's degree - Digital Marketing",
      issuer:"INSEEC Business School Paris",
      year:"2015",
    },

    {
      educationLogoSrc:"/img/resume/educations/diploma-logo-uvsq.png",
      title:"BTEC Higher National Diploma",
      issuer:"Versailles Saint-Quentin-en-Yvelines University",
      year:"2012",
      courseDetails: [
        'French Title : DUT Techniques de Commercialisation',
        'Specialized in Marketing'
      ]
    },

  ]

</script>
