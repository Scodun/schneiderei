<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2 relative group">
          <!-- Sophisticated frame for the sketch -->
          <div class="relative z-10 p-3 md:p-6 bg-[#fdfdfd] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 transform rotate-1 group-hover:rotate-0 transition-all duration-1000 ease-in-out">
            <div class="overflow-hidden bg-gray-50 relative">
              <img 
                src="../assets/special/1.webp"
                alt="Handgezeichnetes Modell" 
                class="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <!-- Sketch details -->
            <div class="mt-4 flex justify-between items-end border-t border-gray-100 pt-4">
              <div class="flex items-center gap-3">
                <img src="../assets/profil.webp" alt="Gabriele Burgstaller" class="w-10 h-10 rounded-full object-cover border border-primary/20">
                <div>
                  <p class="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold">Modell-Studie</p>
                  <p class="text-[10px] text-primary font-bold">by Gabriele Burgstaller</p>
                </div>
              </div>
              <div class="text-primary opacity-40">
                <PenTool class="w-6 h-6" />
              </div>
            </div>
          </div>
          
          <!-- Decorative background elements -->
          <div class="absolute -top-12 -left-12 w-48 h-48 border border-primary/20 -z-0 transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000"></div>
          <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-full -z-0 blur-3xl"></div>
        </div>
        
        <div class="lg:w-1/2 space-y-8 fade-in">
          <div class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Design & Vision
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase leading-tight">
            Vom ersten Strich <br/>
            <span class="text-primary italic font-light lowercase tracking-widest">zur zeitlosen Eleganz</span>
          </h2>
          <div class="w-24 h-0.5 bg-primary/30"></div>
          <div class="space-y-6 text-lg text-secondary leading-relaxed font-light max-w-xl">
            <p>
              Ich begleite Sie von der ersten Idee bis zum fertigen Modestück. Dabei stehen Ihre persönlichen Wünsche im Mittelpunkt: Gemeinsam finden wir das passende Design, Material und die ideale Form für Ihr individuelles Unikat.
            </p>
          </div>
          
          <div class="pt-8 flex flex-wrap gap-6 items-center">
            <a href="#contact" class="btn">Ihr individuelles Design</a>
            <div class="flex items-center gap-2 text-text-muted text-sm uppercase tracking-widest font-bold">
              <span class="w-8 h-[1px] bg-text-muted"></span>
              Exklusivität garantiert
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PenTool } from '@lucide/vue';
</script>

<style scoped>
</style>
