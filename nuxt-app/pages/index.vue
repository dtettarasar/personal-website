<template>
  
  <div class="bg-slate-800">

    <sections-hero-big></sections-hero-big>

    <text-section-title icon="mdi:account-circle" title="About me" ></text-section-title>

    <div class="container p-4 mx-auto text-white md:text-lg">

      <p class="my-2 md:my-4" v-for="paragraph in introStore.paragraphs" :key="paragraph" v-html="paragraph"></p>


      <div class="flex flex-wrap flex-row justify-around pt-4">

        <button-link link="/resume" icon="mdi:card-account-details" label="Resume"></button-link> 

        <button-link link="/portfolio" icon="mdi:application-braces" label="Portfolio"></button-link> 

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">

import { useIntroStore } from '@/stores/introStores'

const introStore = useIntroStore()

// Get data with SSR method
await useAsyncData('intro-text', () => introStore.fetchIntroText())

// Get data with CSR method using OnMounted
// onMounted(() => { introStore.fetchIntroText() } )

</script>
