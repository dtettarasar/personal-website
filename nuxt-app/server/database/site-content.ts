// server/data/site-content.ts

export function getMyTitle() {
    return {
        title: `Hello World! I’m Dylan`,
        subtitle: `Digital Project Manager & Technical Product Owner <span class="block md:inline">· Web, CRM & Digital Platform</span>`,
    }
}

export function getIntroText(): string[] {
    return [
        `Hello, I'm Dylan Tettarasar, a Digital Project Manager & Technical Product Owner with 7 years of experience in web environments, bridging the gap between business needs and technical execution.`,

        `I started my career in web development and digital project management, working across design, integration, and deployment. 
        For several years, <strong>I managed and maintained WordPress platforms for enterprise clients (Uber, KPMG, Politico), 
        coordinated development teams, wrote technical specifications, and oversaw the complete project lifecycle from conception to production</strong>.`,
        
        `<strong>This gave me a comprehensive understanding of how modern web applications are built, deployed, and scaled</strong> — 
        both from a technical architecture perspective and a product/business impact angle. I developed strong expertise in 
        digital project management, CRM platforms (Salesforce), performance optimization, and the ability to collaborate 
        effectively with cross-functional teams as I understand both the technical and business sides.`,

        `Over time, <strong>I deepened my technical skills on modern frameworks and full-stack architectures</strong>. 
        I mastered Vue.js, Nuxt.js, Node.js, and modern DevOps workflows (Docker, Git, CI/CD), 
        and built several production-ready applications. <strong>This hands-on development experience makes me a more effective 
        project manager</strong> — I speak the same language as developers and can evaluate technical solutions with confidence.`,
       
        `Today, I position myself as a <strong>Technical Product Owner with strong hands-on web expertise</strong>. I combine 
        project management skills (backlog management, specs, stakeholder coordination) with a genuine understanding of 
        technical constraints and digital product strategy. This combination allows me to <strong>deliver projects that are 
        not only well-executed but also strategically aligned with business goals</strong>.`,
    ]
}

  export function getResumeIntro() {

    return [
        `Over the years, I've worked at the crossroads of web project management, CRM platforms, and technical development: piloting WordPress platforms for enterprise clients (Uber, KPMG, Politico), managing Salesforce projects end-to-end, and coordinating development teams from specifications to production delivery.`,
        `Today, I combine this hands-on experience with a genuine technical background in modern web development — making me a Project Manager who truly speaks the same language as developers, and a Technical Product Owner who can bridge business needs and technical execution with confidence.`
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
            "<strong>Technical Project Management:</strong> Collected and structured business requirements from internal stakeholders, translated them into clear functional specifications and Jira workflows. Coordinated development teams, managed delivery cycles, and led QA testing from staging to production.",
            "<strong>CRM Project Management:</strong> Piloted Salesforce projects end-to-end: requirements gathering, functional specs, ticket creation and prioritization, developer coordination, UAT testing and production validation. Managed Flows configuration, custom objects and deployment workflows.",
            "<strong>Web Project Management:</strong> Managed and maintained 15+ WordPress platforms for enterprise clients (Uber, KPMG, Politico). Coordinated with design teams from Figma mockups to production, managed hosting providers, DNS configurations and SSL certificates.",
            "<strong>Performance & SEO:</strong> Led technical SEO optimization and web performance initiatives (Core Web Vitals) across all client platforms. Monitored analytics and provided data-driven recommendations.",
            "<strong>Frontend Development:</strong> Hands-on HTML5/CSS3/JavaScript integration and Lightning Web Components (Salesforce) adjustments, ensuring technical autonomy when interfacing with development teams."
          ]
        },
        {
          companyName: "ABUS France",
          companyVenue: "Villeneuve-le-Roi, France",
          jobTitle: "Digital Marketing & Web Referent",
          period: "Feb 2016 - Jun 2017",
          companyLogoSrc: "/img/resume/experiences/company-logo-abus.png",
          jobMissions: [
            "<strong>Technical Interface:</strong> Acted as the primary point of contact for the German HQ development team, managing bug tracking, feature requests and project follow-up.",
            "<strong>CMS Administration:</strong> Managed the French product catalog using eZ Publish, focusing on structural content updates and technical SEO.",
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
        title: "Project Management",
        icon: "mdi:clipboard-check",
        items: [
          { icon: "mdi:jira", label: "Jira" },
          { icon: "mdi:atlassian", label: "Confluence" },
          { icon: "bi:kanban-fill", label: "Agile / Kanban" },
          { icon: "mdi:file-document-edit", label: "Functional Specs" },
          { icon: "mdi:account-group", label: "Stakeholder Management" }
        ]
      },

      {
        title: "CRM & Business Platforms",
        icon: "lsicon:marketing-filled",
        items: [
          { icon: "mdi:salesforce", label: "Salesforce" },
          { icon: "ic:baseline-wordpress", label: "WordPress" },
          { icon: "mdi:google-analytics", label: "Google Analytics" },
          { icon: "mdi:microsoft-office", label: "Office Suite" }
        ]
      },

      {
        title: "SEO & Performance",
        icon: "mdi:magnify",
        items: [
          { icon: "mdi:search-web", label: "Technical SEO" },
          { icon: "mdi:speedometer", label: "Core Web Vitals" },
          { icon: "mdi:eye-check", label: "Accessibility (WCAG)" }
        ]
      },

      {
        title: "Web & Digital",
        icon: "mdi:web",
        items: [
          { icon: "mdi:language-html5", label: "HTML5" },
          { icon: "mdi:language-css3", label: "CSS3" },
          { icon: "mdi:language-javascript", label: "JavaScript" },
          { icon: "mdi:tailwind", label: "Tailwind CSS" },
          { icon: "mdi:bootstrap", label: "Bootstrap" },
          { icon: "mdi:vuejs", label: "Vue.js" },
          { icon: "lineicons:nuxt", label: "Nuxt.js" }
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
          { icon: "ri:copilot-fill", label: "GitHub Copilot" },
          { icon: "ri:claude-fill", label: "Claude Code" },
          { icon: "devicon-plain:vitest", label: "Vitest" }
        ]
      },

      {
        title: "Backend & Databases",
        icon: "mdi:server-network",
        items: [
          { icon: "mdi:nodejs", label: "Node.js / Express" },
          { icon: "lineicons:mongodb", label: "MongoDB" },
          { icon: "mdi:language-python", label: "Python" },
          { icon: "mdi:database", label: "SQL" }
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

  export function getProjects() {
    return [
      {
        title: "News Ipsum",
        img: "/img/portfolio/news-ipsum-homepage.png",
        desc: [
          "<strong>End-to-end web project</strong> managed and built from conception to production deployment — illustrating full ownership of a digital product lifecycle.",
          "Defined <strong>product architecture and technical roadmap</strong> before development, applying structured project management methodology (specs, backlog, iterative delivery).",
          "Implemented <strong>Test-Driven Development (TDD)</strong> with Vitest to ensure reliable business logic and maintainable codebase.",
          "Automated deployment using a <strong>Docker & Caddy</strong> stack with native SSL management on a VPS — demonstrating DevOps awareness.",
          "Focus on <strong>Web Accessibility (a11y)</strong> and SEO optimization, ensuring both technical excellence and user experience quality."
        ],
        icon: "material-symbols:newspaper-rounded",
        stack: [
          "mdi:language-typescript",
          "mdi:vuejs",
          "lineicons:nuxt",
          "devicon-plain:vitest",
          "fa7-brands:node-js",
          "mdi:tailwind",
          "lineicons:mongodb",
          "mdi:docker",
          "simple-icons:caddy",
        ],
        links: [
          { 
            label: "View source code", 
            url: "https://github.com/dtettarasar/news-ipsum", 
            icon: "material-symbols:code-blocks" 
          },
          { 
            label: "Live Demo", 
            url: "https://projects-news.dylan-tettarasar.dev/", 
            icon: "material-symbols:rocket-launch" 
          }
        ]
      },
      {
        title: "Personal Portfolio Architecture",
        img: "/img/portfolio/img-portfolio-personal-homepage.png",
        desc: [
          "A <strong>Fullstack SSR application</strong> designed and built as a complete digital product — from architecture design to production deployment.",
          "Demonstrates <strong>end-to-end project ownership</strong>: technical architecture, API design, frontend integration and infrastructure management.",
          "Orchestrated with <strong>Docker</strong> (multi-service environment) including separate Dev and Production configurations.",
          "Secure infrastructure using <strong>Caddy</strong> as a reverse proxy with automated HTTPS/SSL certificates.",
          "Engineered as a <strong>Generic Starter Kit</strong>, available as Open Source on GitHub under MIT license.",
        ],
        icon: "material-symbols:person-pin-rounded",
        stack: [
          "mdi:language-html5",
          "mdi:language-css3",
          "mdi:language-javascript",
          "mdi:tailwind",
          "mdi:vuejs",
          "lineicons:nuxt",
          "devicon-plain:vitest",
          "fa7-brands:node-js",
          "lineicons:mongodb",
          "mdi:docker",
          "simple-icons:caddy"
        ],
        links: [
          {
            label:"View source code", 
            url: "https://github.com/dtettarasar/personal-website",
            icon:"material-symbols:code-blocks"
          }
        ]
      },
      {
        title: "Otis AI – AI SaaS Platform",
        img: "/img/portfolio/otis-ai-homepage.png",
        desc: [
          "A <strong>complete SaaS product</strong> designed and delivered end-to-end — from product concept to technical implementation and monetization.",
          "Defined and implemented a <strong>credit-based business model</strong> with full Stripe API integration, demonstrating product strategy and business thinking.",
          "Architected a <strong>secure full-stack application</strong> with JWT authentication, REST API and real-time database interactions.",
          "Built a comprehensive <strong>test suite (Unit & Integration)</strong> with Vitest to ensure product stability and reliability.",
          "Integrates <strong>OpenAI API</strong> via dynamic prompt engineering for AI-assisted content generation workflows.",
        ],
        icon: "material-symbols:edit-note-rounded",
        stack: [
          "mdi:language-html5",
          "mdi:language-css3",
          "mdi:language-javascript",
          "mdi:bootstrap",
          "mdi:vuejs",
          "fa7-brands:node-js",
          "devicon-plain:vitest",
          "lineicons:mongodb",
          "bi:stripe",
          "simple-icons:openai"
        ],
        links: [
          { 
            label:"View source code (Vue app)", 
            url: "https://github.com/dtettarasar/otis-ai-frontend",
            icon:"material-symbols:code-blocks", 
          },
          { 
            label:"View source code (Node JS Backend)", 
            url: "https://github.com/dtettarasar/otis-ai-backend",
            icon:"material-symbols:code-blocks", 
          },
          {
            label:"Watch demo video",
            url: "https://www.youtube.com/watch?v=4xhqBR_Kues",
            icon:"material-symbols:video-library",
          }
        ],
      },
      {
        title: "AI Art Shield – Protect Your Art",
        img: "/img/portfolio/cs50.jpg",
        desc: [
          "A <strong>Python-based security tool</strong> designed to protect visual artworks from unauthorized AI training and scraping.",
          "Implements <strong>invisible perturbations</strong> (Discrete Cosine Transform - DCT) to disrupt AI style recognition without altering human perception.",
          "Features a <strong>Protection Evaluation System</strong> that measures and compares alteration levels between original and secured versions.",
          "Engineered with <strong>Pillow, OpenCV, and NumPy</strong> for high-performance image processing.",
          "The project is part of <strong>Harvard's CS50P course</strong>.",
        ],
        icon: "ic:round-terminal",
        stack: [
          "mdi:language-python",
        ],
        links: [
          { 
            label:"View source code", 
            url: "https://github.com/dtettarasar/CS50P-final-project",
            icon:"material-symbols:code-blocks", 
          },
          { 
            label:"Watch demo video",
            url: "https://www.youtube.com/watch?v=fzHck-rlLZ0",
            icon:"material-symbols:video-library", 
          },
        ],
      },
      {
        title: "Tic Tac Toe AI – Algorithm Mastery",
        img: "/img/portfolio/img-portfolio-cs50x-final.png",
        desc: [
          "A <strong>browser-based game</strong> featuring an unbeatable AI powered by the <strong>Minimax Algorithm</strong>.",
          "Engineered three distinct game modes: Human vs. Human, Easy AI (Randomized logic), and Impossible AI (Recursive decision-making).",
          "Developed a real-time <strong>Score & Statistics Tracker</strong> managing session states across multiple game rounds.",
          "Focus on clean UI/UX with responsive design — demonstrating product thinking and user experience sensitivity.",
          "The project is part of <strong>Harvard's CS50x course</strong>.",
        ],
        icon: "hugeicons:tic-tac-toe",
        stack: [
          "mdi:language-html5",
          "mdi:language-css3",
          "mdi:language-javascript",
        ],
        links: [
          { 
            label:"View source code", 
            url: "https://github.com/dtettarasar/CS50-tic-tac-toe",
            icon:"material-symbols:code-blocks", 
          },
          { 
            label:"Watch demo video",
            url: "https://youtu.be/O13g7CtV2bI",
            icon:"material-symbols:video-library", 
          },
        ],
      },
      {
        title: "Business Conference Platform",
        img: "/img/portfolio/img-portfolio-cs50-homepage.png",
        desc: [
          "<strong>Responsive event platform</strong> featuring a complex registration system — demonstrating UX thinking and user journey design.",
          "Engineered a <strong>custom Form Validation Engine</strong> using Regex for real-time error messaging and data integrity.",
          "Developed <strong>dynamic scroll-triggered animations</strong> and smart navigation elements.",
          "Built with a mobile-first approach using <strong>Bootstrap</strong>, ensuring cross-browser compatibility.",
          "The project is part of <strong>Harvard's CS50x course</strong>.",
        ],
        icon: "material-symbols:event-available-rounded",
        stack: [
          "mdi:language-javascript",
          "mdi:language-html5",
          "mdi:language-css3",
          "mdi:bootstrap"
        ],
        links: [
          { 
            label: "View source code", 
            url: "https://github.com/dtettarasar/cs50x-homepage",
            icon: "material-symbols:code-blocks" 
          }
        ]
      },
      {
        title: "Technical Documentation Interface",
        img: "/img/portfolio/img-portfolio-doc-page.png",
        desc: [
          "<strong>High-readability documentation portal</strong> — demonstrating information architecture and content structuring skills.",
          "Strict adherence to <strong>HTML5 Semantic standards</strong> and ARIA roles for full accessibility compliance.",
          "Engineered a <strong>dynamic CSS layout</strong> with sticky navigation and fluid typography for optimal reading experience.",
          "Certified 'Pixel Perfect' implementation, passing 100% of automated accessibility and responsiveness tests."
        ],
        icon: "mdi:file-document",
        stack: [
          "mdi:language-html5",
          "mdi:language-css3",
          "mdi:language-javascript",
        ],
        links: [
          { 
            label: "View code on CodePen", 
            url: "https://codepen.io/dtettarasar/pen/rNNemwV",
            icon: "material-symbols:code-blocks" 
          }
        ]
      }
    ]
}
