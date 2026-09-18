<template>
  <div class="min-h-screen pt-24 pb-20">
    <div class="container mx-auto px-6">
      <h1 class="section-title mb-16">Alle erwerbbaren Einzelstücke</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="item in itemsForSale" :key="item.id" class="flex flex-col space-y-6">
          <div class="relative group aspect-[3/4] overflow-hidden bg-gray-100 shadow-md">
            <transition name="fade" mode="out-in">
              <img 
                :key="getCurrentIndex(item.id)"
                :src="item.images[getCurrentIndex(item.id)]" 
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </transition>

            <!-- Small Carousel Controls -->
            <div v-if="item.images.length > 1" class="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                @click.stop="prevImage(item)" 
                class="p-1 bg-white/80 hover:bg-white text-primary rounded-full shadow-sm transition-all active:scale-90"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button 
                @click.stop="nextImage(item)" 
                class="p-1 bg-white/80 hover:bg-white text-primary rounded-full shadow-sm transition-all active:scale-90"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>

            <!-- Dots -->
            <div v-if="item.images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              <div 
                v-for="(_, index) in item.images" 
                :key="index"
                class="w-1.5 h-1.5 rounded-full transition-all duration-300"
                :class="getCurrentIndex(item.id) === index ? 'bg-primary w-3' : 'bg-white/60'"
              ></div>
            </div>
          </div>
          <div class="space-y-4">
            <h2 class="text-2xl font-bold uppercase tracking-tight">{{ item.title }}</h2>
            <p class="text-text-muted font-light">{{ item.description }}</p>
            
            <div class="text-sm space-y-1">
               <p v-for="(value, label) in item.details" :key="label">
                 <span class="font-bold uppercase tracking-widest text-[10px] text-text-muted">{{ translateLabel(label) }}:</span> 
                 <span class="ml-2 text-secondary">{{ value }}</span>
               </p>
            </div>
            
            <div class="pt-4 flex justify-between items-center border-t border-gray-100">
              <span class="text-primary font-bold italic text-sm">{{ item.price }}</span>
              <router-link :to="{ path: '/', hash: '#contact' }" class="btn py-2 px-4 text-[10px]">Anfragen</router-link>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-20 text-center">
        <router-link to="/" class="text-primary hover:underline uppercase tracking-widest text-sm font-bold">
          ← Zurück zur Startseite
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import { itemsForSale } from '../data/itemsForSale';

const itemIndices = ref({});

const getCurrentIndex = (id) => {
  return itemIndices.value[id] || 0;
};

const nextImage = (item) => {
  const currentIndex = getCurrentIndex(item.id);
  itemIndices.value[item.id] = (currentIndex + 1) % item.images.length;
};

const prevImage = (item) => {
  const currentIndex = getCurrentIndex(item.id);
  itemIndices.value[item.id] = (currentIndex - 1 + item.images.length) % item.images.length;
};

const translateLabel = (label) => {
  const translations = {
    color: 'Farbe',
    size: 'Größe',
    measurements: 'Maße',
    material: 'Material'
  };
  return translations[label] || label;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
