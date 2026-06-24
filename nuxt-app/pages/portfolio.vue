<template>
  <div >

    <sections-hero-small icon="mdi:application-braces" :title="pageTitle" ></sections-hero-small>

    <portfolio-project-section />

    <!--<other-teasing></other-teasing>-->

  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { navLabels } from '~/constants/ui-labels'

const { locale } = useI18n()

const pageTitle = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  return navLabels.portfolio[lang]
})

</script>
