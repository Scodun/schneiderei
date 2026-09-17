<template>
  <div class="bg-bg w-full">
    <NavigationBar/>
    <RouterView />
    <Footer />
  </div>
</template>
<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
</script>
<style scoped>

</style>
