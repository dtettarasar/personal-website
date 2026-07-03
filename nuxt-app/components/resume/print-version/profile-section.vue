<template>
  <section class="section-block">
    <ResumePrintVersionSectionTitle
      title="Profile"
      :icon="ResumePrintVersionIconsGlobeIcon"
    />

    <p class="profile-text">{{ profileText }}</p>
  </section>
</template>

<script setup lang="ts">
import ResumePrintVersionIconsGlobeIcon from './icons/globe-icon.vue'
import { useResumePrintProfileStore } from '~/stores/resumePrintProfileStore'

const { locale } = useI18n()
const profileStore = useResumePrintProfileStore()

await useAsyncData('resume-print-profile-text', async () => {
  return await profileStore.fetchData(locale.value)
}, {
  watch: [locale]
})

const profileText = computed(() => {
  return profileStore.getPrintProfileText(locale.value)
})
</script>

<style scoped>
.section-block {
  margin-bottom: 18px;
}

.profile-text {
  margin: 0;
  font-size: 0.83rem;
  line-height: 1.6;
  color: #1e293b;
}

@media print {
  .section-block {
    margin-bottom: 12px;
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
