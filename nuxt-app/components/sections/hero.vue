<template>
  <section id="hero" class="flex flex-col justify-center items-center h-screen text-center relative overflow-hidden">
    <div class="space-y-6 z-10 flex flex-col">

        <img class="w-32 lg:w-48 self-center" src="/img/profile_pic_square.jpg" ></img>

        <h1 class="font-mono tracking-widest text-green-400 text-5xl md:text-6xl uppercase">
            Hello World! I’m Dylan :)<span class="animate-pulse">_</span>
        </h1>


      <p class="text-lg md:text-2xl lg:text-3xl font-light text-gray-100">
        Full Stack Developer & Project Manager
      </p>

      <div class="flex justify-center items-center gap-6 pt-4">
        <Icon name="ic:outline-alternate-email" class="w-16 h-16 text-white hover:text-green-400 transition-colors" />
        <Icon name="mdi:linkedin" class="w-16 h-16 text-white hover:text-green-400 transition-colors" />
        <Icon name="fa7-brands:github" class="w-16 h-16 text-white hover:text-green-400 transition-colors" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  background: linear-gradient(45deg, #0f2027, #203a43, #2c5364, #6a11cb, #b993d6);
  background-size: 400% 400%;
  animation: gradientMove 12s ease infinite alternate;
}
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 50% 50%; }
  100% { background-position: 100% 50%; }
}
</style>
