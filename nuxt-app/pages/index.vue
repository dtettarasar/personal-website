<template>
  
  <div class="bg-slate-800">

    <sections-hero></sections-hero>

    <text-section-title icon="mdi:account-circle" title="About me" ></text-section-title>

    <div class="container p-4 mx-auto text-white md:text-lg">

      <p class="my-2 md:my-4">

        I started my career in <strong>digital communication and web project management</strong>, spending several years leading projects that connected strategy, 
        creativity, and technology.

      </p>

      <p class="my-2 md:my-4">

        During this time, I worked on <strong>WordPress websites, SEO optimization, and web content production</strong>, 
        often taking on both the strategic vision and the hands-on execution — from UX design to publishing and performance analysis.

      </p>

      <p class="my-2 md:my-4">

        This experience gave me a <strong>360° understanding of the web ecosystem</strong>: how a website is designed, developed, optimized, and maintained over time. 
        It also shaped my sense of autonomy, creativity, and adaptability — qualities that have always guided my work.

      </p>

      <p class="my-2 md:my-4">

        Over time, I felt the need to go deeper into the <strong>technical side of creation</strong>, to understand what happens under the hood — beyond CMS tools and pre-built solutions.
        That’s what led me to learn <strong>JavaScript, Python, and modern frameworks like Nuxt.js, Vue, and Django</strong>, and to gradually move towards <strong>fullstack development</strong>.

      </p>

      <div class="flex flex-wrap flex-row justify-around pt-4">

        <NuxtLink class="w-fit p-4 mb-2 flex flex-col items-center bg-slate-800 border-4 border-emerald-400 rounded-lg hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.6)] md:text-2xl lg:text-3xl text-white hover:text-black transition-all duration-300" to="/resume">
          <Icon name="mdi:mail-ru" class="w-10 h-10" />
          Resume
        </NuxtLink>     
        
        <NuxtLink class="w-fit p-4 mb-2 flex flex-col items-center bg-slate-800 border-4 border-emerald-400 rounded-lg hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.6)] md:text-2xl lg:text-3xl text-white hover:text-black transition-all duration-300" to="/resume">
          <Icon name="mdi:mail-ru" class="w-10 h-10" />
          Resume
        </NuxtLink>     

      </div>

    </div>

    <text-section-title icon="mdi:comment-account" title="Contact" ></text-section-title>

  </div>

</template>

<script setup lang="ts">

</script>
