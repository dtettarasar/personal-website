<template>
  <nav class="sticky top-0 z-50 p-4 bg-slate-800 text-white flex flex-row justify-between items-center shadow-md">

    <div class="w-[300px] p-2 text-lg font-mono tracking-wide">
      <p><a href="/">{{ configStore.ownerName }}</a></p>
    </div>

    <div class="basis-full hidden lg:flex flex-row content-center justify-end">
      <div class="flex flex-row justify-center items-center gap-8 h-full">

        <div
          v-for="item in menuItems"
          :key="item.to"
          class="group flex flex-col justify-between items-center"
        >
          <NuxtLink :to="item.to" class="pb-1">
            {{ item.label }}
          </NuxtLink>

          <div
            :class="[
              'w-[30px] h-[4px] rounded-full transition-all duration-300',
              route.path === item.to
                ? 'bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]'
                : 'bg-transparent group-hover:bg-emerald-400 group-hover:shadow-[0_0_6px_rgba(74,222,128,0.4)]'
            ]"
          ></div>
        </div>

        <div class="flex items-center gap-2 border-l border-slate-600 pl-4 h-5 ml-2 text-sm font-bold">
          <button 
            @click="setLocale('fr')" 
            :class="locale === 'fr' ? 'text-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.3)]' : 'text-slate-400 hover:text-white transition-colors'"
          >
            FR
          </button>
          <span class="text-slate-600">|</span>
          <button 
            @click="setLocale('en')" 
            :class="locale === 'en' ? 'text-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.3)]' : 'text-slate-400 hover:text-white transition-colors'"
          >
            EN
          </button>
        </div>

      </div>
    </div>

    <div class="lg:hidden flex flex-row items-center gap-5">
        
      <div class="flex items-center gap-2 text-sm font-bold">
        <button 
          @click="setLocale('fr')" 
          :class="locale === 'fr' ? 'text-emerald-400' : 'text-slate-400'"
        >
          FR
        </button>
        <span class="text-slate-600">|</span>
        <button 
          @click="setLocale('en')" 
          :class="locale === 'en' ? 'text-emerald-400' : 'text-slate-400'"
        >
          EN
        </button>
      </div>

      <Icon
        @click="toggleMenu"
        :name="isMenuOpen ? 'mdi:close-circle' : 'mdi:chevron-down-circle'"
        class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors cursor-pointer"
      />

    </div>

  </nav>

  <Transition name="slide">
    <div class="bg-slate-800 text-white lg:hidden overflow-hidden" v-show="isMenuOpen">
      <div class="flex flex-col items-center justify-center py-4">
        <div
          v-for="item in menuItems"
          :key="item.to"
          class="w-full text-center py-2 transition-colors duration-200"
          :class="{
              'bg-slate-700': route.path === item.to,
              'hover:bg-slate-700/50': route.path !== item.to
          }"
        >
          <NuxtLink
            @click="toggleMenu"
            :to="item.to"
            class="block text-lg font-semibold w-full px-4 py-2" 
            :class="{
                'text-emerald-400': route.path === item.to,
                'text-white': route.path !== item.to
            }"
          >
            {{ item.label }}
          </NuxtLink>
        </div> 
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useConfigStore } from '~/stores/configStore'
import { navLabels } from '~/constants/ui-labels'

const route = useRoute()
const isMenuOpen = ref(false)
const { locale, setLocale } = useI18n()

// Initialisation du store global config
const configStore = useConfigStore()
await useAsyncData('global-config', () => configStore.fetchConfig())

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuItems = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  
  return [
    { label: navLabels.home[lang], to: '/' },
    { label: navLabels.resume[lang], to: '/resume' },
    { label: navLabels.portfolio[lang], to: '/portfolio' },
    // { label: navLabels.contact[lang], to: '/contact' },
  ]
})
</script>

<style scoped>
/* Tes styles pour la transition slide restent parfaits */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease-out, opacity 0.3s ease-in-out; 
  overflow: hidden; 
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px; 
  opacity: 1;
}
</style>