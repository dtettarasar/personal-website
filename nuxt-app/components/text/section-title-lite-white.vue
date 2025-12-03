<script setup>
const separatorClasses = [
  'flex-grow',
  'h-[3px]',
  'rounded-full',
  'bg-white/70',
  'shadow-[0_0_10px_rgba(255,255,255,0.6)]'
]

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'mdi:star'
  }
})
</script>

<template>

  <div class="
    text-white 
    text-base md:text-lg 
    p-2 md:p-3 
    rounded-md 
    flex flex-row flex-wrap md:flex-nowrap 
    items-center 
    gap-2 md:gap-3
  ">

      <Icon 
        :name="icon" 
        class="size-[24px] md:size-[30px] text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
      />

      <h3 class="text-white text-lg md:text-xl font-medium flex-shrink-0">
        {{ title }}
      </h3>

      <div :class="separatorClasses"></div>

  </div>

</template>
