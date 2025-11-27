<script lang="js" setup>

    const separatorClasses = [
        'w-[70%]',
        'h-[4px]',
        'rounded-full',
        'bg-emerald-400',
        'mx-auto',
        'my-4',
    ]

</script>

<template>

    <div class="max-w-md overflow-hidden bg-white shadow-sm border-2 border-slate-200 rounded-lg">

        <div class="p-8 border-b-2 border-slate-200">
            <img class="w-[70%] md:w-[50%] mx-auto" src="/img/resume/experiences/company-logo-dii.png"></img>
        </div>
        <div class="px-6 py-4">
            <p class="text-xl md:text-2xl mb-2 text-slate-800" >Drive Innovation Insights (Paris, France)</p>

            <div class="flex flex-row gap-3 text-l md:text-xl font-light text-slate-700">

                <p>Webmaster</p>

                <span class="text-emerald-400">•</span>

                <p>January 2018 - Present</p>

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