<template>
  <div class="min-h-screen h-screen text-cli-primary-text min-w-[500px] max-h-full">
    <NavigationBar/>
    <Opening/>
  </div>
  <div class="text-cli-primary-text min-w-[500px]">
    <Images/>
    <Contact/>
  </div>

</template>
<script>
import NavigationBar from "./components/NavigationBar.vue";
import Opening from "./components/Opening.vue";
import Images from "./components/Images.vue";
import Contact from "./components/Contact.vue";
export default {
  name: "App",
  components: {Contact, Images, Opening, NavigationBar}
}
</script>
<style scoped>

</style>
