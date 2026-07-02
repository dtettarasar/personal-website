<template>
  <article class="entry-block">
    <div class="entry-header">
      <h3>{{ title }}</h3>
      <span>{{ year }}</span>
    </div>

    <p class="entry-meta">{{ issuer }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  issuer: string
  year: string
}>()
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

@media print {
  .entry-block {
    margin-bottom: 8px;
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>