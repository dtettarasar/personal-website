<script setup>

    defineProps({
        title: {
            type: String,
            required: true
        },
        issuer: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <div class="max-w-md overflow-hidden bg-white border-2 border-slate-300 rounded-lg p-4">

        <div class="flex flex-col items-center gap-2 mb-1 border-b-2 border-slate-300 p-4">

            <Icon 
                name="mdi:cap" 
                class="text-emerald-500 size-[36px]" 
            />

            <p class="text-2xl md:text-3xl text-emerald-600 font-bold text-center" >{{title}}</p>

        </div>

        <div class="px-6 py-4">
            
            <div class="flex flex-row items-center gap-2 mb-1">
                <Icon name="mdi:school" class="text-slate-800 size-[24px]" />
                <p class="text-xl md:text-2xl text-slate-800 font-semibold" >{{issuer}}</p>
            </div>

            <div class="flex flex-row items-center gap-2 mb-1">
                <Icon name="mdi:calendar-month" class="text-slate-500 size-[24px]" />
                <p class="text-lg font-light text-slate-700" >{{ year }}</p>
            </div>

            <div :class="separatorClasses"></div>
            
            <div v-if="certificationLink" class="mt-4 text-center">
                <a 
                    :href="certificationLink" 
                    target="_blank" 
                    class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-full transition-colors hover:bg-emerald-600 shadow-lg"
                >
                    Voir le Certificat
                    <Icon name="mdi:open-in-new" class="size-[20px]" />
                </a>
            </div>
            
            <div v-else-if="courseDetails">
                <ul class="text-slate-600 md:text-l list-disc list-inside space-y-2 mt-4">
                    <li v-for="(detail, i) in courseDetails" :key="i">{{ detail }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>
