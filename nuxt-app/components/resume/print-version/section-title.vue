<template>
  <div class="section-title-row">
    <component :is="icon" v-if="icon" class="section-icon" />
    <h2>{{ title }}</h2>
    <span class="rule" />
  </div>
</template>

<script setup lang="ts">
type IconComponent = object | (() => unknown)

defineProps<{
  title: string
  icon?: IconComponent
}>()
</script>

<style scoped>
.section-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.section-icon {
  color: #0f766e;
  font-size: 0.92rem;
  flex-shrink: 0;
}

h2 {
  margin: 0;
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: #0f766e;
}

.rule {
  height: 1px;
  flex: 1;
  background: #e2e8f0;
}
</style>