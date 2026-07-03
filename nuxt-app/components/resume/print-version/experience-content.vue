<template>
  <article v-if="shouldRender" class="entry-block">
    <div class="entry-header">
      <h3>{{ jobTitle }}</h3>
      <span>{{ period }}</span>
    </div>

    <p class="entry-meta">{{ companyMeta }}</p>

    <ul v-if="missionsToRender.length">
      <li v-for="mission in missionsToRender" :key="mission">{{ mission }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  companyName: string
  companyVenue?: string
  jobTitle: string
  period: string
  jobMissions?: string[]
  jobMissionsShort?: string[]
  displayOnPrint: boolean
}>()

const shouldRender = computed(() => props.displayOnPrint)

const companyMeta = computed(() => {
  return props.companyVenue
    ? `${props.companyName} · ${props.companyVenue}`
    : props.companyName
})

const missionsToRender = computed(() => {
  if (props.jobMissionsShort?.length) {
    return props.jobMissionsShort
  }

  return props.jobMissions ?? []
})
</script>

<style scoped>
.entry-block {
  margin-bottom: 12px;
}

.entry-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.entry-header h3 {
  margin: 0;
  font-size: 0.9rem;
  font-family: Georgia, "Times New Roman", serif;
  color: #0f172a;
}

.entry-header span {
  font-size: 0.68rem;
  color: #64748b;
}

.entry-meta {
  margin: 1px 0 4px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f766e;
}

ul {
  margin: 0;
  padding-left: 14px;
  font-size: 0.78rem;
  line-height: 1.5;
  color: #1e293b;
}

li {
  margin-bottom: 2px;
}

@media print {
  .entry-block {
    margin-bottom: 8px;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  ul {
    line-height: 1.4;
  }
}
</style>