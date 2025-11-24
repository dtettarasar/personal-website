<template>

    <nav class="sticky top-0 z-50 p-4 bg-slate-800 text-white flex flex-row justify-between">

        <div class="w-[300px] p-2 text-lg">
            <p><a href="/">Dylan Tettarasar</a></p>
        </div>

        <div class="basis-full hidden lg:flex flex-row content-center justify-end">

            <div class="flex flex-row justify-center items-center gap-8 h-full">

                <div
                v-for="item in menuItems"
                :key="item.to"
                class="group flex flex-col justify-between items-center"
                >

                    <NuxtLink :to="item.to" class="">
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

            </div>

        </div>

        <div class="lg:hidden">

            <Icon
                @click="toggleMenu"
                :name="isMenuOpen ? 'mdi:close-circle' : 'mdi:chevron-down-circle'"
                class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors"
            />

        </div>

    </nav>

    <Transition name="slide">
        <div class="bg-slate-800 text-white lg:hidden overflow-hidden" v-show="isMenuOpen">
            
            <div class="flex flex-col items-center justify-center py-4"> <div
                v-for="item in menuItems"
                :key="item.to"
                class="py-2"
                >
                    <NuxtLink @click="toggleMenu" :to="item.to" class="text-lg">
                        {{ item.label }}
                    </NuxtLink>
                </div>
            </div>

        </div>
    </Transition>

</template>

<script setup>

    import { useRoute } from 'vue-router'
    import { ref } from 'vue'

    const route = useRoute()
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const menuItems = [

        { label: 'Home', to: '/' },
        { label: 'Resume', to: '/resume' },
        { label: 'Portfolio', to: '/portfolio' },
        { label: 'Contact', to: '/contact' },
        
    ]

</script>

<style scoped>

    /* 1. Définition de la transition pour la phase de mouvement */
    .slide-enter-active,
    .slide-leave-active {
        /* Nous voulons que l'animation dure 0.3s et affecte max-height et opacity */
        transition: max-height 0.3s ease-out, opacity 0.3s ease-in-out; 
        /* IMPORTANT : Mettre une grande valeur ici pour garantir que la hauteur est lue correctement 
        avant de se rétracter ou s'étendre. */
        overflow: hidden; 
    }

    /* 2. État initial (Entrée) et état final (Sortie) */
    .slide-enter-from,
    .slide-leave-to {
        /* Commence plat (0) et transparent */
        max-height: 0;
        opacity: 0;
    }

    /* 3. État final (Entrée) et état initial (Sortie) */
    .slide-enter-to,
    .slide-leave-from {
        /* Finit déplié et opaque. */
        max-height: 500px; /* Doit être suffisant pour couvrir le menu le plus grand */
        opacity: 1;
    }


</style>