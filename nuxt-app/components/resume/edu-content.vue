<script setup>

    const separatorClasses = [
        'w-[70%]',
        'h-[4px]',
        'rounded-full',
        'bg-emerald-500',
        'mx-auto',
        'my-4',
    ]

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
        },

        educationLogoSrc: { 
            type: String, 
            required: true
        },

        courseDetails: {
            type: Array,
            required: false
        },

        certificationLink: {
            type: String, 
            required: false
        },

    })

</script>

<template>
    <div class="max-w-md overflow-hidden bg-white border-2 border-slate-300 rounded-lg p-4">

        <div class="flex flex-col items-center gap-2 mb-1 border-b-2 border-slate-300 p-4">

            <div class="p-8">
                <img class="w-[90%] md:w-[80%] mx-auto rounded-md" :src="educationLogoSrc"></img>
            </div>

            <p class="text-2xl md:text-3xl text-emerald-600 font-bold text-center" >{{title}}</p>

        </div>

        <div class="px-6 py-4">
            
            <div class="flex flex-row items-center gap-2 mb-1">
                <Icon name="mdi:school" class="text-emerald-500 size-[24px] flex-shrink-0" />
                <p class="text-xl md:text-2xl text-slate-800 font-semibold" >{{issuer}}</p>
            </div>

            <div class="flex flex-row items-center gap-2 mb-1">
                <Icon name="mdi:calendar-month" class="text-emerald-500 size-[24px]" />
                <p class="text-lg font-light text-slate-700" >{{ year }}</p>
            </div>

            <div v-if="courseDetails">
                <ul class="text-slate-600 md:text-l list-disc list-inside space-y-2 mt-4">
                    <li v-for="(detail, i) in courseDetails" :key="i">{{ detail }}</li>
                </ul>
            </div>
            
            <div v-if="certificationLink" class="mt-4 text-center">
                <a 
                    :href="certificationLink" 
                    target="_blank" 
                    class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-full transition-colors hover:bg-emerald-600 shadow-lg"
                >
                    Show credential
                    <Icon name="mdi:open-in-new" class="size-[20px]" />
                </a>
            </div>

        </div>
    </div>
</template>
