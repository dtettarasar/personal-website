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
      title: "My personal website",
      img: "/img/portfolio/img-portfolio-personal-homepage.png",
      desc: [
        "The website you're on right now :)",
        "Designed and developed <strong>from scratch</strong> with Nuxt, Vue & Tailwind.",
        "Dockerized and deployed with <strong>Caddy</strong>.",
        "Fast, responsive, and mobile-first."
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
      title: "CS50P: Final Project",
      img: "/img/portfolio/cs50.jpg",
      desc: [
        "Final project for <strong>Harvard's CS50P course</strong>.",
        "This command-line tool <strong>protects visual artworks from predatory generative AI systems</strong> (Midjourney, DALL-E, Sora, etc.).",
        "Built with Python",
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
