<template>
  <nav class="w-full z-50 h-20 flex items-center fixed top-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/20">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <router-link to="/" class="flex items-center gap-4">
        <img class="h-12 w-auto" src="../assets/gb.webp" alt="Logo" />
        <span class="hidden md:block text-lg font-bold tracking-tighter uppercase">Schneiderei & Design</span>
      </router-link>
      
      <div class="flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
        <router-link to="/#home" class="hover:text-primary transition-colors duration-300">Home</router-link>
        <router-link to="/#design" class="hover:text-primary transition-colors duration-300">Design</router-link>
        <router-link to="/#highlights" class="hover:text-primary transition-colors duration-300">Highlights</router-link>
        <router-link to="/#contact" class="hover:text-primary transition-colors duration-300">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>

</style>