<template>
  <div class="h-screen w-screen">
    <NavigationBar/>
    <Opening/>
  </div>
  <div class="h-screen w-screen">
    <Images/>
  </div>

</template>
<script>
import NavigationBar from "./components/NavigationBar.vue";
import Opening from "./components/Opening.vue";
import Images from "./components/Images.vue";
export default {
  name: "App",
  components: {Images, Opening, NavigationBar}
}
</script>
<style scoped>

</style>
