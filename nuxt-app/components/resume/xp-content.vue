<script lang="js" setup>

    const separatorClasses = [
        'w-[70%]',
        'h-[4px]',
        'rounded-full',
        'bg-emerald-500',
        'mx-auto',
        'my-4',
    ]

    defineProps({
        
        companyName: {
            type: String,
            required: true
        },

        companyVenue: {
            type: String,
            required: false
        },

        jobTitle: {
            type: String,
            required: true
        },

        jobMissions: {
            type: Array,
            required: false,
        },

        period: {
            type: String,
            required: true
        },

    })

</script>

<template>

    <div class="max-w-md overflow-hidden bg-white border-2 border-slate-300 rounded-lg p-4">

        <div class="p-8 border-b-2 border-slate-300">
            <img class="w-[70%] md:w-[50%] mx-auto" src="/img/resume/experiences/company-logo-dii.png"></img>
        </div>

        <div class="flex flex-col items-center gap-2 mb-1 border-b-2 border-slate-300 p-4">

            <Icon 
                name="mdi:clipboard-account" 
                class=" text-emerald-500 size-[36px]" 
            />

            <p class="text-2xl md:text-3xl text-slate-800" >{{ jobTitle }}</p>

        </div>

        <div class="px-6 py-4">

            <div class="flex flex-row items-center gap-2 mb-1">

                <Icon 
                name="mdi:office-building" 
                class=" text-emerald-500 size-[24px]" 
                />

                <p class="text-xl md:text-2xl text-slate-800" >{{ companyName }}</p>

            </div>

            <div v-if="companyVenue" class="flex flex-row items-center gap-2 mb-1">

                <Icon 
                name="mdi:calendar-month" 
                class=" text-emerald-500 size-[24px]" 
                />

                <p class="text-lg font-light text-slate-700 font-semibold" >{{ period }}</p>

            </div>

            <div class="flex flex-row items-center gap-2 mb-1">

                

                <Icon 
                name="mdi:map-marker-radius" 
                class=" text-emerald-500 size-[24px]" 
                />

                <p class="text-lg font-light text-slate-700 font-semibold" >{{ companyVenue }}</p>

            </div>

            <div v-if="jobMissions" :class="separatorClasses"></div>
            
            <div v-if="jobMissions">

                <ul class="text-slate-600 md:text-l list-disc list-inside space-y-2 mt-4">

                    <li
                        v-for="(mission, index) in jobMissions"
                        :key="index"
                    >
                        {{ mission }}
                    </li>

                </ul>

            </div>

        </div>

    </div>

</template>