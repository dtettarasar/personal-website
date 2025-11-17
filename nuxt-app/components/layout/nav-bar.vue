<template>

    <nav class="sticky top-0 z-50 p-4 bg-slate-800 text-white flex flex-row">

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

            <p>mobile menu</p>

        </div>

    </nav>

    

</template>

<script setup>

    import { useRoute } from 'vue-router'

    const route = useRoute()

    const menuItems = [

        { label: 'Home', to: '/' },
        { label: 'Resume', to: '/resume' },
        { label: 'Portfolio', to: '/portfolio' },
        { label: 'Contact', to: '/contact' },
        
    ]

</script>