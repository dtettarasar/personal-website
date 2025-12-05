<script setup>

  import { ref } from 'vue'

  const projects = ref([
    {
      title: "Otis AI: Your Digital Scribe",
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "This is a web app created to assist content writer in article creation.",
        "This application allow to quickly generated SEO friendly with the help of AI (using the Open AI API), by simply providing keywords, a short description or a title.",
        "Built with Vue, Express JS and MongoDB."
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
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "Project made for CS50P's final project",
        "The project is command-line tool developed in Python for protecting visual artworks from predatory generative artificial intelligence systems (such as midjourney, dall-e, sora, etc...).",
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
          url: "https://www.youtube.com/watch?v=uEjsgDL0S_0",
          icon:"material-symbols:video-library", 
        },
      ],
    },
    {
      title: "CS50x: Tic Tac Toe",
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "Project made for CS50x's final project",
        "The project is a Tic Tac Toe Game, running in the browser.",
        "Built with HTML, CSS and JS.",
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
          url: "https://www.youtube.com/watch?v=jnWGF0sQf5U",
          icon:"material-symbols:video-library", 
        },
      ],
    },
    {
      title: "CS50x: Homepage",
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "Project made for CS50x.",
        "Built with HTML, CSS, JS, and Bootstrap.",
        "Website designed to present and promote a business conference."
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
        "Project made for the Responsive Web Design certification.",
        "Clean, accessible and responsive page structure."
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
