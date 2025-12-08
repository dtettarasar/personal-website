<script setup>
defineProps({
  project: Object,
  index: Number,
  active: Number,
  toggle: Function
})
</script>

<template>
  <div
    class="bg-slate-800 border-2 border-emerald-400 rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] transition-all duration-300"
  >

    <!-- HEADER -->
    <button
      @click="toggle(index)"
      class="group w-full px-6 py-6 flex items-center justify-between text-left bg-slate-800 hover:bg-emerald-500 transition-colors duration-300 rounded-t-xl"
    >
      <div class="flex items-center gap-3">
        <Icon :name="project.icon" class="text-emerald-400 text-3xl group-hover:text-black transition-colors duration-300 drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
        <h3 class="text-xl md:text-2xl text-white group-hover:text-black transition-colors duration-300 font-mono font-semibold">{{ project.title }}</h3>
      </div>

      <Icon
        name="mdi:chevron-right"
        class="text-emerald-400 group-hover:text-black text-3xl transition-transform duration-300"
        :class="active === index ? 'rotate-90' : ''"
      />
    </button>

    <!-- BODY -->
    <div
      class="overflow-hidden transition-all duration-500"
      :style="{ maxHeight: active === index ? '1500px' : '0px' }"
    >
      <div class="px-6 pb-6 pt-3 flex flex-col gap-6">

        <!-- IMAGE -->
        <div v-if="project.img" class="w-full overflow-hidden rounded-lg aspect-[16/9]">
          <img
            :src="project.img"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt="project.title"
          />
        </div>

        <!-- DESCRIPTION + STACK + LINK -->
        <div class="space-y-4 text-slate-200">

          <div>
            <p
              v-for="(d, i) in project.desc"
              :key="i"
              class="leading-relaxed"
              v-html="d"
            ></p>
          </div>

          <!-- STACK ICONS -->
          <div class="grid grid-cols-4 md:grid-cols-5 gap-4 mt-2 place-items-center">
            <Icon 
                v-for="tech in project.stack"
                :key="tech"
                :name="tech"
                class="w-9 h-9 text-emerald-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                :alt="tech"
            />
          </div>

          <!-- LINK BUTTON -->
          <NuxtLink
            v-for="link in project.links"
            :to="link.url"
            target="_blank"
            class="inline-flex items-center mx-2 gap-2 bg-slate-900 border-2 border-emerald-400 text-white font-mono px-4 py-2 rounded-lg hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_15px_rgba(74,222,128,0.6)] transition-all duration-300 w-fit"
          >

            <Icon :name="link.icon" class="text-2xl" />

            {{ link.label }}

          </NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>
