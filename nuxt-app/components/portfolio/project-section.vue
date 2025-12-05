<script setup>

  import { ref } from 'vue'

  const projects = ref([
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
