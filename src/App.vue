<template>
  <div class="bg-bg w-full">
    <div class="min-h-screen">
      <NavigationBar/>
      <Opening id="home"/>
    </div>
    <SketchSection id="design" />
    <div class="container mx-auto px-4 py-16">
      <Highlights id="highlights" />
      <Contact id="contact"/>
    </div>
    <Impressum id="impressum" />
    <PrivacyPolicy id="datenschutz" />
    <Footer />
  </div>
</template>
<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Opening from "./components/Opening.vue";
import SketchSection from "./components/SketchSection.vue";
import Highlights from "./components/Highlights.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Impressum from "./components/Impressum.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
</script>
<style scoped>

</style>
