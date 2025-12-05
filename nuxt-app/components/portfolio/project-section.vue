<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: "CS50x : Homepage",
    img: "/img/portfolio/img-portfolio-cs50-homepage.png",
    desc: [
      "Project made for CS50x.",
      "Built with HTML, CSS, JS, and Bootstrap. The project is about a website designed to present and promote a business conference.",
    ],
    link: "https://github.com/dtettarasar/cs50x-homepage"
  },
  {
    title: "freeCodeCamp : Technical Documentation Page",
    img: "/img/portfolio/img-portfolio-doc-page.png",
    desc: [
      "Project made for freeCodeCamp’s Responsive Web Design certification."
    ],
    link: "https://codepen.io/dtettarasar/full/rNNemwV"
  },
  // Ajoute tous tes projets ici…
])

const active = ref(null)

const toggle = (index) => {
  active.value = active.value === index ? null : index
}
</script>

<template>

  <section id="portfolio" class="py-12">

    <div class="space-y-6 max-w-4xl mx-auto">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="border border-slate-300 rounded-xl overflow-hidden shadow-sm"
      >
        <!-- Header -->
        <button
          class="w-full text-left px-6 py-4 bg-slate-100 hover:bg-slate-200 transition flex justify-between items-center"
          @click="toggle(index)"
        >
          <h3 class="text-xl font-semibold text-slate-800">{{ project.title }}</h3>
          <span class="text-slate-600">
            {{ active === index ? '−' : '+' }}
          </span>
        </button>

        <!-- Content -->
        <div
          class="transition-all duration-300 overflow-hidden"
          :style="{
            maxHeight: active === index ? '500px' : '0px'
          }"
        >
          <div class="p-6 flex flex-col md:flex-row gap-6">
            <img
              :src="project.img"
              class="w-full md:w-1/2 rounded-lg shadow"
              alt=""
            />

            <div class="md:w-1/2 space-y-3">
              <p
                v-for="(p, i) in project.desc"
                :key="i"
                class="text-slate-700 leading-relaxed"
              >
                {{ p }}
              </p>

              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>

</template>
