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

    <div class="bg-slate-800 text-white lg:hidden" v-if="isMenuOpen">

        <div class="flex flex-col items-center justify-center">

            <div
            v-for="item in menuItems"
            :key="item.to"
            >

                <NuxtLink @click="toggleMenu" :to="item.to" class="">
                    {{ item.label }}
                </NuxtLink>

            </div>

        </div>

    </div>

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