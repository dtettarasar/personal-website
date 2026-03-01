// server/data/site-content.ts

export function getIntroText(): string[] {
    return [
        'Hello world I am Dylan Tettarasar, a Technical Product Owner & Web Project Manager with hands-on fullstack development expertise.',

        `I started my career in digital communication and web project management, working across strategy, design, and execution. 
        For several years, <strong>I led and orchestrated WordPress platforms for enterprise clients (Uber, KPMG, Politico), managed cross-functional teams, and owned the complete product lifecycle from conception to production</strong>.`,
        
        `<strong>This gave me a comprehensive, operational understanding of how products are built, deployed, and scaled</strong> — from both technical architecture and business impact perspectives. 
        I developed expertise in product strategy, backlog management, cross-functional leadership, and—crucially—the ability to speak fluently with developers because I understand their world deeply.`,

        `Over time, <strong>I decided to deepen my technical foundation</strong> — to move beyond project management tools and actually understand the systems I was managing. 
        That's when I shifted to hands-on development, mastering JavaScript, Python, Docker, APIs, and modern full-stack frameworks.`,
       
        `Today, I position myself as a <strong>Technical Product Owner who codes</strong>. I combine product thinking (roadmap strategy, user needs, business metrics) with hands-on development skills (Vue.js, Nuxt, Node.js, MongoDB, DevOps). 
        This combination lets me <strong>challenge developers with confidence, architect solutions, and ship products that are both strategically sound and technically excellent</strong>.`,
    ]
  }

  export function getLanguageContent() {

    return [

        {
            name: 'French',
            level: 'Native Language',
            img: '/img/language/france-croissant.png'
        },

        {
            name: 'English',
            level: 'Business Level',
            img: '/img/language/uk-afternoon-tea.png'
        },

    ]

  }

  export function getExperiences() {

    return [

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

  }

  export function getSkills() {
    return [
      {
        title: "Frontend – Main Stack",
        icon: "mdi:star-four-points",
        items: [
          { icon: "mdi:vuejs", label: "Vue.js" },
          { icon: "lineicons:nuxt", label: "Nuxt.js" },
          { icon: "mdi:tailwind", label: "Tailwind CSS" }
        ]
      },

      {
        title: "Web & Integration",
        icon: "mdi:code-tags",
        items: [
          { icon: "mdi:language-html5", label: "HTML5" },
          { icon: "mdi:language-css3", label: "CSS3" },
          { icon: "mdi:language-javascript", label: "JavaScript" },
          { icon: "mdi:bootstrap", label: "Bootstrap" }
        ]
      },

      {
        title: "Tools & Workflow",
        icon: "carbon:tools-alt",
        items: [
          { icon: "mdi:git", label: "Git" },
          { icon: "mdi:docker", label: "Docker" },
          { icon: "simple-icons:caddy", label: "Caddy" },
          { icon: "mdi:github", label: "GitHub" },
          { icon: "mdi:jira", label: "Jira" }
        ]
      },

      {
        title: "Backend (not my primary focus but operational)",
        icon: "mdi:server-network",
        items: [
          { icon: "mdi:nodejs", label: "Node.js / Express" },
          { icon: "lineicons:mongodb", label: "MongoDB" },
          { icon: "mdi:language-python", label: "Python" },
          { icon: "devicon-plain:django", label: "Django" },
          { icon: "mdi:database", label: "SQL" }
        ]
      },

      {
        title: "CMS & Business Tools",
        icon: "lsicon:marketing-filled",
        items: [
          { icon: "ic:baseline-wordpress", label: "WordPress" },
          { icon: "mdi:salesforce", label: "Salesforce" },
          { icon: "mdi:google-analytics", label: "Google Analytics" },
          { icon: "mdi:microsoft-office", label: "Office Suite" }
        ]
      },

      {
        title: "Creative Tools",
        icon: "ion:color-palette",
        items: [
          { icon: "file-icons:gimp", label: "GIMP" },
          { icon: "simple-icons:krita", label: "Krita" },
          { icon: "solar:figma-bold", label: "Figma" }
        ]
      }
    ]
  }

  export function getEducations() {
    return [
      {
        educationLogoSrc: "/img/resume/educations/harvard-university-logo-0.png",
        title: "Introduction to Programming with Python",
        issuer: "Harvard University",
        year: "2025",
        certificationLink: "https://certificates.cs50.io/eed08f81-a764-4e60-b861-87bb616aacff.pdf?size=letter"
      },

      {
        educationLogoSrc: "/img/resume/educations/fcc_logo.png",
        title: "Back End Development and APIs",
        issuer: "freeCodeCamp",
        year: "2023",
        certificationLink: "https://www.freecodecamp.org/certification/fcc9e0cf531/back-end-development-and-apis"
      },

      {
        educationLogoSrc: "/img/resume/educations/harvard-university-logo-0.png",
        title: "CS50x - Introduction to Computer Science",
        issuer: "Harvard University",
        year: "2021",
        certificationLink: "https://courses.edx.org/certificates/8c91c4feaae048159aab19a913c47924"
      },

      {
        educationLogoSrc: "/img/resume/educations/fcc_logo.png",
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        year: "2020",
        certificationLink: "https://www.freecodecamp.org/certification/fcc9e0cf531/javascript-algorithms-and-data-structures"
      },

      {
        educationLogoSrc: "/img/resume/educations/fcc_logo.png",
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        year: "2020",
        certificationLink: "https://www.freecodecamp.org/certification/fcc9e0cf531/responsive-web-design"
      },

      {
        educationLogoSrc: "/img/resume/educations/diploma-logo-inseec.png",
        title: "Master's degree - Digital Marketing",
        issuer: "INSEEC Business School Paris",
        year: "2015"
      },

      {
        educationLogoSrc: "/img/resume/educations/diploma-logo-uvsq.png",
        title: "BTEC Higher National Diploma",
        issuer: "Versailles Saint-Quentin-en-Yvelines University",
        year: "2012",
        courseDetails: [
          "French Title : DUT Techniques de Commercialisation",
          "Specialized in Marketing"
        ]
      }
    ]
  }
