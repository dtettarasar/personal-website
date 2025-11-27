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

    })

</script>

<template>

    <div class="max-w-md overflow-hidden bg-white border-2 border-slate-300 rounded-lg p-4">

        <div class="p-8 border-b-2 border-slate-300">
            <img class="w-[70%] md:w-[50%] mx-auto" src="/img/resume/experiences/company-logo-dii.png"></img>
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
                name="mdi:map-marker-radius" 
                class=" text-emerald-500 size-[24px]" 
                />

                <p class="text-xl md:text-2xl text-slate-800" >{{ companyVenue }}</p>

            </div>

            <div class="flex flex-row items-center gap-2 mb-1">

                <Icon 
                name="mdi:clipboard-account" 
                class=" text-emerald-500 size-[24px]" 
                />

                <p class="text-lg font-light text-slate-700 font-semibold" >{{ jobTitle }}</p>

            </div>

            <div class="flex flex-row items-center gap-2 mb-1">

                <Icon 
                name="mdi:calendar-month" 
                class=" text-emerald-500 size-[24px]" 
                />

                <p class="text-lg font-light text-slate-700 font-semibold" >January 2018 - Present</p>

            </div>

            <div :class="separatorClasses"></div>
            
            <div>
                    <ul class="text-slate-600 md:text-l list-disc list-inside space-y-2 mt-4">

                        <li>websites creation and content management, using WordPress</li>
                        <li>graphic design (photo-editing, banners, visual elements for social media...)</li>
                        <li>stats monitoring in Google Analytics</li>
                        <li>Salesforce administration and internal support</li>

                    </ul>
                </div>

        </div>

    </div>

</template>