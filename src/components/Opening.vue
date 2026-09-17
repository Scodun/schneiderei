<template>
  <div class="relative min-h-screen flex flex-col pt-20">
    <div class="parallax-container w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div class="text-center text-white px-4 fade-in flex flex-col items-center">
          <img class="h-16 md:h-24 mb-6 drop-shadow-lg" src="../assets/meisterbetrieb.webp" alt="Meisterbetrieb">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter uppercase">Schneiderei & Design</h1>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest uppercase italic">Gabriele Burgstaller</h2>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 py-16 md:py-24">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="relative">
             <div class="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary"></div>
             <div class="p-8 bg-white shadow-xl border border-gray-50 fade-in">
               <div class="flex flex-col sm:flex-row items-center gap-8 mb-10 pb-8 border-b border-gray-50">
                 <div class="relative">
                   <img class="h-32 w-32 md:h-40 md:w-40 rounded-sm object-cover border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105" src="../assets/profil.webp" alt="Gabriele Burgstaller">
                   <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-white p-2 rounded-full shadow-lg border border-gray-100">
                     <img src="../assets/meisterbetrieb.webp" alt="Meisterbetrieb" class="w-full h-full object-contain">
                   </div>
                 </div>
                 <div class="text-center sm:text-left">
                   <h3 class="text-2xl font-bold uppercase tracking-tighter mb-1">Gabriele Burgstaller</h3>
                   <p class="text-sm text-primary font-bold uppercase tracking-[0.2em] mb-4">Meisterbetrieb</p>
                   <p class="text-text-muted max-w-xs">
                     Das Atelier liegt im Stadtteil Lind, wo Sie in entspannter, moderner Atmosphäre beraten werden.
                   </p>
                 </div>
               </div>
               <div class="space-y-4">
                 <h3 class="text-sm font-bold uppercase tracking-widest text-primary">Unsere Leistungen</h3>
                 <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-secondary">
                   <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Stoffentwicklung</li>
                   <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Entwurf</li>
                   <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Schnittentwicklung</li>
                   <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Fertigung</li>
                   <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Änderungen</li>
                 </ul>
               </div>
               <p class="mt-8 text-sm text-text-muted">
                 Erreichbar nach tel. Voranmeldung von Montag bis Freitag.
               </p>
             </div>
          </div>
        </div>

        <div class="h-full min-h-[400px] shadow-2xl rounded-sm overflow-hidden border border-gray-200">
          <iframe 
            class="w-full h-full transition-all duration-700" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2740.2550886821346!2d13.83933453712082!3d46.621722396739074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4770813afd9c3513%3A0x25e6558eb1a3c766!2sSchneiderei%20%26%20Design%20-%20Gabriele%20Burgstaller!5e0!3m2!1sen!2sat!4v1674872191247!5m2!1sen!2sat" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    
    <!-- Decorative element -->
    <div class="w-full overflow-hidden leading-none rotate-180">
      <svg class="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-bg"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.parallax-container {
  background-image: url("../assets/assorted-color-threads-in-spools-1189675-1-1980x1114.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>