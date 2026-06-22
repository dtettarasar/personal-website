<script setup lang="ts">

  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useProjectsStore } from '@/stores/projectsStore'


  const { locale } = useI18n()
  const projectsStore = useProjectsStore()
  await useAsyncData('projects', () => projectsStore.fetchData(locale.value), {
    watch: [locale]
  })

  const active = ref(null)
  const toggle = (i) => active.value = active.value === i ? null : i

  const projects = computed(() => projectsStore.dataByLocale[locale.value] || []) 
  
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
