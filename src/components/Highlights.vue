<template>
  <section class="py-20 bg-white/50">
    <div class="container mx-auto px-4">
      <div class="relative mb-12 flex flex-col items-center">
        <h2 class="section-title mb-4">Besondere Stücke</h2>
      </div>
      <p class="text-center text-text-muted mb-12 max-w-2xl mx-auto">
        Entdecken Sie unsere Detailaufnahmen und Collagen, die das Handwerk und die Qualität unserer Arbeit aus verschiedenen Perspektiven zeigen.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="img in displayedHighlights" 
          :key="img"
          class="group relative overflow-hidden rounded-sm shadow-lg bg-gray-200 aspect-square cursor-pointer"
          @click="selectedImage = img"
        >
          <img 
            :src="'/highlights/' + img" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Tailor Highlight"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Search class="w-8 h-8 mx-auto mb-2" />
              <span class="uppercase tracking-widest text-xs font-bold">Details ansehen</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!isExpanded && highlights.length > 6" class="mt-12 text-center">
        <button @click="isExpanded = true" class="btn">Alle Highlights ansehen</button>
      </div>
    </div>

    <Teleport to="body">
      <ImageModal 
        v-if="selectedImage" 
        :image="'/highlights/' + selectedImage" 
        @close="selectedImage = null" 
      />
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Search } from '@lucide/vue';
import ImageModal from './ImageModal.vue';

const selectedImage = ref(null);
const isExpanded = ref(false);

const highlights = [
  "20260917_121145.webp",
  "20241226_120524.webp",
  "20260318_224429.webp",
  "20260318_214745.webp",
  "20241226_103003.webp",
  "20241226_112629.webp",
  "20260318_225828.webp",
  "20241226_113921.webp",
  "20241226_113439.webp",
  "20241226_113052.webp",
  "20241226_110154.webp",
  "20241226_104004.webp",
  "20241226_103727.webp",
  "20241226_103539.webp",
  "20260318_225144.webp",
];

const displayedHighlights = computed(() => {
  return isExpanded.value ? highlights : highlights.slice(0, 6);
});
</script>
