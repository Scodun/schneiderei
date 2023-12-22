<template>
  <div class="bg-cli-primary-background w-full">
  <div class="min-h-screen sm:h-screen text-cli-primary-text">
    <NavigationBar/>
    <Opening id="home"/>
  </div>
  <div class="text-cli-primary-text">
    <Images />
    <Contact id="contact"/>
  </div>
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
