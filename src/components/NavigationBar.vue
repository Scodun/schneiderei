<template>
  <div class="w-full z-50 h-14 flex flex-row justify-between items-center fixed top-0 bg-cli-primary-light shadow-lg">
    <img class="h-12 align-middle pl-2" src="src/assets/GB.png" />
    <div class="w-full flex justify-center">
      <div class="h-max leading-[3.5rem] align-middle font-bold">
        <a href="#home" class="hover:text-stone-700">Home</a>
        <span class="ml-2 mr-2">-</span>
        <a href="#images" class="hover:text-stone-700">Images</a>
        <span class="ml-2 mr-2">-</span>
        <a href="#contact" class="hover:text-stone-700">Contact</a>
      </div>
    </div>
  </div>
  <div class="w-full h-1 bg-cli-primary fixed z-50 top-14"/>

</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>