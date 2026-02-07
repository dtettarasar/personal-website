<script setup>

  import { ref } from 'vue'

  const projects = ref([
    {
      title: "News Ipsum",
      img: "/img/portfolio/news-ipsum-homepage.png", // Prends une capture du carrousel !
      desc: [
        "<strong>High-performance News Platform</strong> built with a modern Nuxt 4/3 and TypeScript architecture.",
        "Implemented a <strong>Test-Driven Development (TDD)</strong> approach with Vitest to ensure reliable business logic from day one.",
        "Focus on <strong>Web Accessibility (a11y)</strong>, aiming for WCAG compliance to provide an optimal reading experience.",
        "Developed custom <strong>CLI internal tools</strong> for efficient Docker environment management and admin initialization.",
        "Automated deployment using a <strong>Docker & Caddy</strong> stack with native SSL management on a VPS."
      ],
      icon: "material-symbols:newspaper-rounded",
      stack: [
        "mdi:language-typescript",
        "mdi:vuejs",
        "lineicons:nuxt",
        "simple-icons:vitest",
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
        "A <strong>Fullstack SSR application</strong> built with Nuxt 4, featuring a custom API for dynamic content management.",
        "Engineered as a <strong>Generic Starter Kit</strong>, available as Open Source on GitHub under MIT license.",
        "Orchestrated with <strong>Docker</strong> (multi-service environment) including separate Dev and Production configurations.",
        "Automated workflows via <strong>Makefile</strong> to standardize deployment and maintenance commands.",
        "Secure infrastructure using <strong>Caddy</strong> as a reverse proxy with automated HTTPS/SSL certificates.",
      ],
      icon: "material-symbols:person-pin-rounded",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
        "mdi:tailwind",
        "mdi:vuejs",
        "lineicons:nuxt",
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
        "An <strong>AI-assisted content generation SaaS</strong> integrating OpenAI models via dynamic prompt engineering.",
        "Full implementation of a <strong>monetization system</strong> using the Stripe API with a credit-based business model.",
        "Robust <strong>JWT-based authentication</strong> system securing exchanges between the Vue.js frontend and Node.js backend.",
        "Rich content editor allowing post-generation formatting and real-time database updates.",
        "Comprehensive test suite (Unit & Integration) with <strong>Vitest</strong> to ensure API and UI stability.",
      ],
      icon: "material-symbols:edit-note-rounded",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
        "mdi:bootstrap",
        "mdi:vuejs",
        "fa7-brands:node-js",
        "simple-icons:vitest",
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
        "A <strong>Advanced Python-based security tool</strong> designed to protect visual artworks from unauthorized AI training and scraping.",
        "Implements <strong>invisible perturbations</strong> (Discrete Cosine Transform - DCT) to disrupt AI style recognition without altering human perception.",
        "Features a <strong>Protection Evaluation System</strong> that measures and compares alteration levels between original and secured versions.",
        "Engineered with <strong>Pillow, OpenCV, and NumPy</strong> for high-performance image processing and pixel-level manipulation.",
        "Future-ready architecture: Designed for modular refactoring and integration of <strong>Adversarial Perturbations</strong> and <strong>Blockchain-signed signatures</strong>.",
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
      title: "CS50x: Tic Tac Toe",
      img: "/img/portfolio/img-portfolio-cs50x-final.png",
      desc: [
        "<strong>Final project for Harvard’s CS50x.</strong>",
        "A Tic Tac Toe game running in the browser.",
        "Built with HTML, CSS and JavaScript.",
      ],
      icon: "hugeicons:tic-tac-toe",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
      ],
      video: "https://youtu.be/O13g7CtV2bI",
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
      title: "CS50x: Homepage",
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "<strong>Project made for Harvard’s CS50x.</strong>",
        "Built with HTML, CSS, JavaScript and Bootstrap.",
        "A responsive promotional website for a business conference."
      ],
      icon: "mdi:star-circle",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
        "mdi:bootstrap",
      ],
      links: [
        { 
          label:"View source code", 
          url: "https://github.com/dtettarasar/cs50x-homepage",
          icon:"material-symbols:code-blocks", 
        },
      ],
    },
    {
      title: "freeCodeCamp: Technical Documentation Page",
      img: "/img/portfolio/img-portfolio-doc-page.png",
      desc: [
        "Built for the Responsive Web Design certification.",
        "Clean, accessible and responsive layout."
      ],
      icon: "mdi:file-document",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
      ],
      links: [
        { 
          label:"View source code", 
          url: "https://codepen.io/dtettarasar/pen/rNNemwV",
          icon:"material-symbols:code-blocks", 
        },
      ],
    },
  ])

  const active = ref(null)
  const toggle = (i) => active.value = active.value === i ? null : i
  
</script>

<template>

  <section id="portfolio" class="py-16 bg-slate-800">

    <div class="max-w-5xl mx-auto space-y-6 px-4">

      <PortfolioProjectCard
        v-for="(p, index) in projects"
        :key="index"
        :project="p"
        :index="index"
        :active="active"
        :toggle="toggle"
      />

    </div>

  </section>

</template>
