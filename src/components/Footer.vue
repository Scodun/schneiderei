<template>
  <footer class="bg-secondary text-white py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center gap-4">
          <img class="h-10 w-auto brightness-0 invert" src="../assets/gb.webp" alt="Logo" />
          <div class="text-left">
            <p class="font-bold uppercase tracking-tighter">Gabriele Burgstaller</p>
            <p class="text-xs text-gray-400 uppercase tracking-widest">Schneiderei & Design</p>
          </div>
        </div>
        
        <div class="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#home" class="hover:text-primary transition-colors duration-300">Home</a>
          <a href="#design" class="hover:text-primary transition-colors duration-300">Design</a>
          <a href="#highlights" class="hover:text-primary transition-colors duration-300">Highlights</a>
          <a href="#contact" class="hover:text-primary transition-colors duration-300">Kontakt</a>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
        <p>&copy; {{ new Date().getFullYear() }} Gabriele Burgstaller. Alle Rechte vorbehalten.</p>
        <div class="flex gap-6">
          <a href="#impressum" class="hover:text-white transition-colors duration-300">Impressum</a>
          <a href="#datenschutz" class="hover:text-white transition-colors duration-300">Datenschutz</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
