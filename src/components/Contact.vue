<template>
  <section class="py-20">
    <h2 class="section-title">Kontakt</h2>
    
    <div class="mt-12 max-w-4xl mx-auto fade-in">
      <div class="card overflow-hidden !p-0 flex flex-col md:flex-row shadow-2xl">
        <div class="md:w-1/2 flex items-center justify-center bg-gray-50/50 p-8 md:p-0">
          <img class="h-48 w-48 md:h-full md:w-full object-cover object-top rounded-sm md:rounded-none border-4 border-white md:border-0 shadow-2xl md:shadow-none transition-transform duration-500 hover:scale-105" src="../assets/me.webp" alt="Gabriele Burgstaller">
        </div>
        
        <div class="md:w-1/2 p-10 flex flex-col justify-center space-y-8 bg-white">
          <div class="space-y-2">
            <h3 class="text-2xl font-bold tracking-tighter uppercase">Wie Sie mich erreichen können</h3>
            <p class="text-text-muted">Ich freue mich auf Ihre Anfrage und berate Sie gerne persönlich.</p>
          </div>
          
          <div class="space-y-6">
            <a href="tel:+436604019979" class="group flex items-center gap-4 hover:text-primary transition-colors duration-300">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-widest text-text-muted font-bold">Telefon</p>
                <p class="text-lg font-bold">+43 660 4019979</p>
              </div>
            </a>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-widest text-text-muted font-bold">Standort</p>
                <p class="text-lg font-bold">Lind, Villach</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-widest text-text-muted font-bold">Öffnungszeiten</p>
                <p class="text-lg font-bold">Mo - Fr nach tel. Voranmeldung</p>
              </div>
            </div>
          </div>
          
          <div class="pt-4">
            <a href="tel:+436604019979" class="btn inline-block text-center w-full md:w-auto">Jetzt Anrufen</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, MapPin, Clock } from '@lucide/vue';
</script>

<style scoped>
</style>