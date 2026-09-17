<template>
  <nav class="w-full z-50 h-20 flex items-center fixed top-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-primary/20">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <router-link to="/" class="flex items-center gap-4 relative z-50">
        <img class="h-12 w-auto" src="../assets/gb.webp" alt="Logo" />
        <span class="hidden md:block text-lg font-bold tracking-tighter uppercase">Schneiderei & Design</span>
      </router-link>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
        <router-link to="/#home" class="hover:text-primary transition-colors duration-300">Home</router-link>
        <router-link to="/#design" class="hover:text-primary transition-colors duration-300">Design</router-link>
        <router-link to="/#highlights" class="hover:text-primary transition-colors duration-300">Highlights</router-link>
        <router-link to="/#contact" class="hover:text-primary transition-colors duration-300">Kontakt</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-primary z-50 focus:outline-none">
        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>

      <!-- Mobile Menu Overlay -->
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center space-y-8 text-xl font-bold uppercase tracking-[0.2em]"
        @click="isMenuOpen = false"
      >
        <router-link to="/#home" class="hover:text-primary transition-colors duration-300">Home</router-link>
        <router-link to="/#design" class="hover:text-primary transition-colors duration-300">Design</router-link>
        <router-link to="/#highlights" class="hover:text-primary transition-colors duration-300">Highlights</router-link>
        <router-link to="/#contact" class="hover:text-primary transition-colors duration-300">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Menu, X } from '@lucide/vue';

const isMenuOpen = ref(false);
</script>

<style scoped>

</style>