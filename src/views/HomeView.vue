<template>
  <div>
    <div class="min-h-screen">
      <Opening id="home"/>
    </div>
    <SketchSection id="design" />
    <div class="container mx-auto px-4 py-16">
      <Highlights id="highlights" />
      <Contact id="contact"/>
    </div>
  </div>
</template>

<script setup>
import Opening from "../components/Opening.vue";
import SketchSection from "../components/SketchSection.vue";
import Highlights from "../components/Highlights.vue";
import Contact from "../components/Contact.vue";
</script>
