<script setup lang="ts">

    import { useEducationsStore } from '@/stores/educationsStore'

    const educationsStore = useEducationsStore();
    await useAsyncData('educations', () => educationsStore.fetchData())

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

</script>

<template>

     <div 
        :class="containerStyleClasses" 
        class="flex flex-row gap-8 flex-wrap justify-center"
    >

        <resume-edu-content 
            v-for="(edu, index) in educationsStore.data"
            :key="index"
            :educationLogoSrc="edu.educationLogoSrc"
            :title="edu.title"
            :issuer="edu.issuer"
            :year="edu.year"
            :certificationLink="edu.certificationLink"
            :courseDetails="edu.courseDetails"
        ></resume-edu-content>

  </div>

</template>