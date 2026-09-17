<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8" @click.self="$emit('close')">
    <button 
      class="absolute top-4 right-4 text-white hover:text-cli-primary transition-colors p-2"
      @click="$emit('close')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="relative max-w-5xl w-full h-full flex items-center justify-center">
      <img 
        class="max-h-full max-w-full object-contain shadow-2xl" 
        :src="image"
        alt="Showroom image"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
});
defineEmits(['close']);
</script>

<style scoped>




</style>