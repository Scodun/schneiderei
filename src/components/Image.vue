<template>
  <div class="h-screen fixed bg-gray top-0 z-50 w-screen flex justify-center bg-gray-600">
    <div class="flex justify-end" @click="close">
      EXIT
    </div>
    <img class="h-screen" :src="image"/>
  </div>

</template>

<script>

export default {
  name: "Image.vue",
  props:{
    image: String,
    close: Function,
  },
}
</script>

<style scoped>




</style>