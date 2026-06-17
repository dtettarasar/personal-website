<template>
  
  <div class="bg-slate-800">

    <sections-hero-big></sections-hero-big>

    <text-section-title icon="mdi:account-circle" title="About me" ></text-section-title>

    <div class="container p-4 mx-auto text-white md:text-lg">

      <p class="my-2 md:my-4" v-for="paragraph in paragraphs" :key="paragraph" v-html="paragraph"></p>


      <div class="flex flex-wrap flex-row justify-around pt-4">

        <button-link link="/resume" icon="mdi:card-account-details" label="Resume"></button-link> 

        <button-link link="/portfolio" icon="mdi:application-braces" label="Portfolio"></button-link> 

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIntroStore } from '~/stores/introStore'

const { locale } = useI18n() // Récupère la locale active (fr ou en)
const introStore = useIntroStore()

console.log("locale.value: ")
console.log(locale.value)

// Get data with SSR method
//await useAsyncData('intro-text', () => introStore.fetchData())

// L'arme secrète de Nuxt : useAsyncData avec l'option watch
await useAsyncData('intro-text', () => introStore.fetchData(locale.value), {
  // Si 'locale' change côté client, useAsyncData relance automatiquement la fonction ci-dessus !
  watch: [locale]
})

// Get data with CSR method using OnMounted
// onMounted(() => { introStore.fetchIntroText() } )

// Propriété calculée pour toujours afficher les paragraphes de la langue active
const paragraphs = computed(() => introStore.dataByLocale[locale.value] || [])

</script>
