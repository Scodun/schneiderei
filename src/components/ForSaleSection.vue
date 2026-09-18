<template>
  <section class="py-24 bg-[#FCF9F7]">
    <div class="container mx-auto px-6">
      <div class="relative mb-12 flex flex-col items-center">
        <h2 class="section-title mb-4">Erwerbbare Einzelstücke</h2>
        <p class="text-center text-text-muted max-w-2xl mx-auto">
          Entdecken Sie meine sofort verfügbaren Modestücke. Jedes Teil ist ein handgefertigtes Unikat, bereit für seinen großen Auftritt.
        </p>
      </div>

      <div v-if="featuredItem" class="flex flex-col lg:flex-row items-center gap-16 mt-12">
        <div class="lg:w-1/2 relative group w-full">
          <div class="relative z-10 p-3 bg-white shadow-xl border border-gray-100 transition-all duration-700">
            <div class="overflow-hidden bg-gray-50 aspect-[4/4] relative">
              <transition name="fade" mode="out-in">
                <img 
                  :key="currentImageIndex"
                  :src="featuredItem.images[currentImageIndex]" 
                  :alt="featuredItem.title"
                  class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </transition>

              <!-- Carousel Navigation -->
              <div v-if="featuredItem.images.length > 1" class="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  @click="prevImage" 
                  class="p-2 bg-white/80 hover:bg-white text-primary rounded-full shadow-md transition-all active:scale-90"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft class="w-6 h-6" />
                </button>
                <button 
                  @click="nextImage" 
                  class="p-2 bg-white/80 hover:bg-white text-primary rounded-full shadow-md transition-all active:scale-90"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight class="w-6 h-6" />
                </button>
              </div>

              <!-- Indicators -->
              <div v-if="featuredItem.images.length > 1" class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                <button 
                  v-for="(_, index) in featuredItem.images" 
                  :key="index"
                  @click="currentImageIndex = index"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="currentImageIndex === index ? 'bg-primary w-6' : 'bg-white/60 hover:bg-white'"
                ></button>
              </div>
            </div>
          </div>
          <div class="absolute -top-6 -left-6 w-32 h-32 border border-primary/20 -z-0"></div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 -z-0"></div>
        </div>

        <div class="lg:w-1/2 space-y-6">
          <div class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em]">
            Sofort verfügbar
          </div>
          <h3 class="text-3xl md:text-4xl font-bold uppercase tracking-tighter">{{ featuredItem.title }}</h3>
          <p class="text-lg text-secondary leading-relaxed font-light">
            {{ featuredItem.description }}
          </p>
          
          <div class="space-y-4 py-6 border-y border-gray-100">
            <div v-for="(value, label) in featuredItem.details" :key="label" class="flex justify-between text-sm">
              <span class="font-bold uppercase tracking-widest text-text-muted">{{ translateLabel(label) }}:</span>
              <span class="text-secondary">{{ value }}</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-6 items-center pt-4">
            <a href="#contact" class="btn flex-1 text-center w-full sm:w-auto">Anfragen</a>
            <router-link v-if="hasMore" to="/zu-verkaufen" class="text-sm font-bold uppercase tracking-[0.2em] text-primary hover:underline">
              Weitere Modestücke ansehen →
            </router-link>
          </div>
          <p class="text-xs text-text-muted italic">* {{ featuredItem.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import { itemsForSale } from '../data/itemsForSale';

const currentImageIndex = ref(0);
const featuredItem = computed(() => itemsForSale[0]);
const hasMore = computed(() => itemsForSale.length > 1);

const nextImage = () => {
  if (!featuredItem.value) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % featuredItem.value.images.length;
};

const prevImage = () => {
  if (!featuredItem.value) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + featuredItem.value.images.length) % featuredItem.value.images.length;
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
