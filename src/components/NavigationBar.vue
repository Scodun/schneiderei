<template>
  <nav class="w-full z-50 h-20 flex items-center fixed top-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/20">
    <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <router-link to="/" class="flex items-center gap-2 md:gap-4 shrink-0" @click="closeMenu">
        <img class="h-8 md:h-12 w-auto shrink-0" src="../assets/gb.webp" alt="Logo" />
        <span class="hidden md:block text-lg font-bold tracking-tighter uppercase">Schneiderei & Design</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden xs:flex items-center space-x-4 md:space-x-8 md:text-sm text-[10px] font-bold uppercase tracking-widest">
        <router-link to="/#home" class="hover:text-primary transition-colors duration-300">Home</router-link>
        <router-link to="/#design" class="hover:text-primary transition-colors duration-300">Design</router-link>
        <router-link to="/#highlights" class="hover:text-primary transition-colors duration-300">Highlights</router-link>
        <router-link to="/#contact" class="hover:text-primary transition-colors duration-300">Kontakt</router-link>
      </div>

      <!-- Burger Button -->
      <button 
        class="xs:hidden p-2 text-primary focus:outline-none" 
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <Menu v-if="!isOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isOpen" 
        class="xs:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-primary/20 flex flex-col py-6 px-6 space-y-4 text-xs font-bold uppercase tracking-widest shadow-xl"
      >
        <router-link to="/#home" @click="closeMenu" class="hover:text-primary py-2 transition-colors">Home</router-link>
        <router-link to="/#design" @click="closeMenu" class="hover:text-primary py-2 transition-colors">Design</router-link>
        <router-link to="/#highlights" @click="closeMenu" class="hover:text-primary py-2 transition-colors">Highlights</router-link>
        <router-link to="/#contact" @click="closeMenu" class="hover:text-primary py-2 transition-colors">Kontakt</router-link>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Menu, X } from '@lucide/vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>

</style>