<template>
  <footer class="bg-secondary text-white py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <router-link to="/" class="flex items-center gap-4">
          <img class="h-10 w-auto brightness-0 invert" src="../assets/gb.webp" alt="Logo" />
          <div class="text-left">
            <p class="font-bold uppercase tracking-tighter">Gabriele Burgstaller</p>
            <p class="text-xs text-gray-400 uppercase tracking-widest">Schneiderei & Design</p>
          </div>
        </router-link>
        
        <div class="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest">
          <router-link to="/#home" class="hover:text-primary transition-colors duration-300">Home</router-link>
          <router-link to="/#design" class="hover:text-primary transition-colors duration-300">Design</router-link>
          <router-link to="/#highlights" class="hover:text-primary transition-colors duration-300">Highlights</router-link>
          <router-link to="/#contact" class="hover:text-primary transition-colors duration-300">Kontakt</router-link>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
        <p>&copy; {{ new Date().getFullYear() }} Gabriele Burgstaller. Alle Rechte vorbehalten.</p>
        <div class="flex gap-6">
          <router-link to="/impressum" class="hover:text-white transition-colors duration-300">Impressum</router-link>
          <router-link to="/datenschutz" class="hover:text-white transition-colors duration-300">Datenschutz</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
