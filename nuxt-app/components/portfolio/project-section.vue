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
      link: "https://github.com/dtettarasar/cs50x-homepage",
      icon: "mdi:star-circle"
    },
    {
      title: "freeCodeCamp: Technical Documentation Page",
      img: "/img/portfolio/img-portfolio-doc-page.png",
      desc: [
        "Project made for the Responsive Web Design certification.",
        "Clean, accessible and responsive page structure."
      ],
      link: "https://codepen.io/dtettarasar/full/rNNemwV",
      icon: "mdi:file-document"
    },
  ])

  const active = ref(null)
  const toggle = (i) => active.value = active.value === i ? null : i
  
</script>

<template>

  <section id="portfolio" class="py-16 bg-slate-900">

    <div class="max-w-5xl mx-auto space-y-6 px-4">

      <div
        v-for="(p, index) in projects"
        :key="index"
        class="bg-white border-2 border-slate-300 rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.3)]"
      >

        <!-- HEADER -->
        <button
          @click="toggle(index)"
          class="w-full px-6 py-6 flex items-center justify-between text-left"
        >
          <div class="flex items-center gap-3">
            <Icon :name="p.icon" class="text-emerald-500 text-3xl drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
            <h3 class="text-xl md:text-2xl text-slate-800 font-semibold">{{ p.title }}</h3>
          </div>

          <Icon
            name="mdi:chevron-right"
            class="text-emerald-400 text-3xl transition drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
            :class="active === index ? 'rotate-90' : ''"
          />
        </button>

        <!-- BODY -->
        <div
          class="overflow-hidden transition-all duration-300"
          :style="{ maxHeight: active === index ? '700px' : '0px' }"
        >
          <div class="px-6 pb-6 flex flex-col md:flex-row gap-8">

            <img
              :src="p.img"
              class="w-full md:w-1/2 rounded-lg border border-slate-300 shadow-sm"
            />

            <div class="md:w-1/2 space-y-3 text-slate-700">

              <p 
                v-for="(d, i) in p.desc"
                :key="i"
                class="leading-relaxed"
              >
                {{ d }}
              </p>

              <NuxtLink
                v-if="p.link"
                :to="p.link"
                target="_blank"
                class="inline-flex items-center gap-2 bg-slate-800 border-2 border-emerald-400 text-white font-mono px-4 py-2 rounded-lg hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_15px_rgba(74,222,128,0.6)] transition-all duration-300 w-fit"
              >
                <Icon name="mdi:open-in-new" class="text-2xl" />
                View project
              </NuxtLink>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>

</template>
