<script setup>

  import { ref } from 'vue'

  const projects = ref([
    {
      title: "CS50P: Final Project",
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "Project made for CS50P's final project",
        "The project is command-line tool developed in Python for protecting visual artworks from predatory generative artificial intelligence systems (such as midjourney, dall-e, sora, etc...).",
        "Built with Python",
      ],
      code: "https://github.com/dtettarasar/CS50P-final-project",
      demo:"https://www.youtube.com/watch?v=uEjsgDL0S_0",
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
      code: "https://github.com/dtettarasar/CS50-tic-tac-toe",
      demo:"https://www.youtube.com/watch?v=jnWGF0sQf5U",
      icon: "hugeicons:tic-tac-toe",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
      ]
    },
    {
      title: "CS50x: Homepage",
      img: "/img/portfolio/img-portfolio-cs50-homepage.png",
      desc: [
        "Project made for CS50x.",
        "Built with HTML, CSS, JS, and Bootstrap.",
        "Website designed to present and promote a business conference."
      ],
      code: "https://github.com/dtettarasar/cs50x-homepage",
      icon: "mdi:star-circle",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
        "mdi:bootstrap",
      ]
    },
    {
      title: "freeCodeCamp: Technical Documentation Page",
      img: "/img/portfolio/img-portfolio-doc-page.png",
      desc: [
        "Project made for the Responsive Web Design certification.",
        "Clean, accessible and responsive page structure."
      ],
      code: "https://codepen.io/dtettarasar/full/rNNemwV",
      icon: "mdi:file-document",
      stack: [
        "mdi:language-html5",
        "mdi:language-css3",
        "mdi:language-javascript",
      ]
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
