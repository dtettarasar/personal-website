<script setup>

  import { ref } from 'vue'

  const projects = ref([
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
      title: "Otis AI: Your Digital Scribe",
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "This is a web app designed to help content writers create articles faster.",
        "It generates <strong>SEO-friendly drafts using AI</strong> (OpenAI API) based on keywords, short descriptions, or titles.",
        "Built with Vue, Express.js and MongoDB."
      ],
      icon: "material-symbols:edit-note-rounded",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
        "mdi:bootstrap",
        "mdi:vuejs",
        "fa7-brands:node-js",
        "lineicons:mongodb",
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
          url: "https://codepen.io/dtettarasar/full/rNNemwV",
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
