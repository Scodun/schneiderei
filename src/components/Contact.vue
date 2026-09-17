<template>
  <div class="mb-16 mt-32" id="images">
    <h2 class="text-5xl header-line "><span class="text-line">Contact</span></h2>
    <div class="flex justify-center mt-16">
      <div class="flex-row w-4 justify-around hidden sm:flex">
        <div>
          <div class="w-1 h-[8rem] mt-4 bg-cli-primary"></div>
          <div class="w-1 h-[1rem] mt-4 bg-cli-primary"></div>
        </div>
        <div>
          <div class="w-1 h-[12rem] mt-4 bg-cli-primary"></div>
          <div class="w-1 h-[1rem] mt-4 bg-cli-primary"></div>
        </div>

      </div>
      <div class="card p-2 rounded bg-white flex flex-row rounded-t-3xl">
        <div class="h-60 ">
          <img  class="h-60 rounded-3xl" src="../assets/me.jpg">
        </div>
        <div class="h-60 ml-4 p-16">
          <div class="flex justify-center mb-8">
            <span class="text-2xl font-bold text-gray-800">Wie Sie mich erreichen können</span>
          </div>
          <p class="text-xl text-gray-800">Tel: +43 660 4019979</p>
          <p class="text-xl text-gray-800 hidden">E-Mail: test@gmail.com</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.header-line{
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}
.text-line{
  background: #fffbff;
  padding:0 10px;
}
</style>