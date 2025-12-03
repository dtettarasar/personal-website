<script setup lang="ts">

    const containerStyleClasses = [
        'container',
        'p-4',
        'mx-auto',
    ]

    const educations = [

        {
            educationLogoSrc:"/img/resume/educations/harvard-university-logo-0.png",
            title:"Introduction to Programming with Python",
            issuer:"Harvard University",
            year:"2025",
            certificationLink:"https://certificates.cs50.io/eed08f81-a764-4e60-b861-87bb616aacff.pdf?size=letter",
        },

        {
            educationLogoSrc:"/img/resume/educations/fcc_logo.png",
            title:"Back End Development and APIs",
            issuer:"freeCodeCamp",
            year:"2023",
            certificationLink:"https://www.freecodecamp.org/certification/fcc9e0cf531/back-end-development-and-apis",
        },

        {
            educationLogoSrc:"/img/resume/educations/harvard-university-logo-0.png",
            title:"CS50x - Introduction to Computer Science",
            issuer:"Harvard University",
            year:"2021",
            certificationLink:"https://courses.edx.org/certificates/8c91c4feaae048159aab19a913c47924",
        },

        {
            educationLogoSrc:"/img/resume/educations/fcc_logo.png",
            title:"JavaScript Algorithms and Data Structures",
            issuer:"freeCodeCamp",
            year:"2020",
            certificationLink:"https://www.freecodecamp.org/certification/fcc9e0cf531/javascript-algorithms-and-data-structures",
        },

        {
            educationLogoSrc:"/img/resume/educations/fcc_logo.png",
            title:"Responsive Web Design",
            issuer:"freeCodeCamp",
            year:"2020",
            certificationLink:"https://www.freecodecamp.org/certification/fcc9e0cf531/responsive-web-design",
        },

        {
            educationLogoSrc:"/img/resume/educations/diploma-logo-inseec.png",
            title:"Master's degree - Digital Marketing",
            issuer:"INSEEC Business School Paris",
            year:"2015",
        },

        {
            educationLogoSrc:"/img/resume/educations/diploma-logo-uvsq.png",
            title:"BTEC Higher National Diploma",
            issuer:"Versailles Saint-Quentin-en-Yvelines University",
            year:"2012",
            courseDetails: [
                'French Title : DUT Techniques de Commercialisation',
                'Specialized in Marketing'
            ]
        },

    ]

</script>

<template>

     <div 
        :class="containerStyleClasses" 
        class="flex flex-row gap-8 flex-wrap justify-center"
    >

        <resume-edu-content 
            v-for="(edu, index) in educations"
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