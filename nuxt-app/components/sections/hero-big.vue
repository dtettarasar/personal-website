<template>
  <section
    id="hero"
    class="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden"
  >

    <!-- Contenu principal -->
    <div class="space-y-8 z-10 flex flex-col items-center px-4">
      
      <!-- Photo avec effet néon vert -->
      <div class="relative">
        <img
          src="/img/profile_pic_square.jpg"
          class="w-32 lg:w-48 rounded-full border-4 border-emerald-400 shadow-[0_0_25px_rgba(74,222,128,0.5)] animate-borderPulse"
        />
      </div>

      <!-- Titre principal -->
      <h1
        class="font-mono tracking-[0.3em] text-emerald-400 text-4xl md:text-6xl uppercase drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]"
      >
        Hello World! I’m Dylan<span class="animate-pulse">_</span>
      </h1>

      <!-- Sous-titre -->
      <p class="text-lg md:text-2xl lg:text-3xl font-light text-gray-200">
        Full Stack Web Developer & Project Manager
      </p>

      <!-- Icônes -->
      <div class="flex justify-center items-center gap-8 pt-6">
        <Icon name="mdi:mail-ru" class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors" />
        <Icon name="fa7-brands:linkedin" class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors" />
        <Icon name="fa7-brands:github" class="w-10 h-10 text-gray-200 hover:text-emerald-400 transition-colors" />
      </div>
    </div>
  </section>
</template>

<style scoped>

/* Effet halo vert autour de la photo */
@keyframes borderPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4);
  }
  70% {
    box-shadow: 0 0 25px 15px rgba(74, 222, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}
.animate-borderPulse {
  animation: borderPulse 2.8s infinite ease-in-out;
}

/* Scanlines subtiles */
@keyframes scanlines {
  from { background-position: 0 0; }
  to { background-position: 0 4px; }
}
.animate-scanlines {
  animation: scanlines 0.8s linear infinite;
  background-size: auto 4px;
}

</style>
