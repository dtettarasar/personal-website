<script setup>

const separatorClasses = [
  'w-full',
  'h-[4px]',
  'rounded-full',
  'bg-emerald-400',
  'shadow-[0_0_10px_rgba(74,222,128,0.6)]'
]

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'mdi:star' // icône par défaut si aucune n’est passée
  }
})

</script>

<template>
  <div class="container py-8 mx-auto">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row items-center justify-center gap-4 border-green-400 text-2xl md:text-4xl">
        <Icon :name="icon" class="w-10 h-10 text-green-400" />
        <h2 class="text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
          {{ title }}
        </h2>
      </div>

      <div :class="separatorClasses"></div>

    </div>
  </div>
</template>
