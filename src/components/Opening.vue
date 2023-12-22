<template>
  <div class="h-full flex flex-col">
    <div class="parallax-container  border-cli-primary"></div>
    <div class="w-full h-0.5 bg-cli-primary"/>
      <div class="p-16 flex-shrink justify-start z-20 mt-2">
        <h1 class="sm-max:text-4xl text-6xl w-full">Schneiderei & Design </h1>
        <h2 class="sm-max:text-3xl text-4xl">Gabriele Burgstaller</h2>

        <div class="mt-8 flex items-center pr-16 justify-center h-full">
          <div class="flex-row w-4 justify-around hidden sm:flex">
            <div>
              <div class="w-1 h-[6rem] mt-2 bg-cli-primary"></div>
              <div class="w-1 h-[0.5rem] mt-2 bg-cli-primary"></div>
            </div>
            <div class="w-1 h-[10rem] mt-2 bg-cli-primary"></div>
          </div>
          <div class="card bg-cli-primary-light w-[35%] min-w-[15rem] max-w-5xl flex flex-wrap justify-end mr-4">
            <div class="">
              <span class="sm:text-base text-sm basis-2/3 flex-grow mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie facilisis elit, vitae fermentum libero egestas non. Suspendisse nec nisl gravida, commodo dolor eu, facilisis arcu. Etiam eleifend scelerisque commodo. Quisque laoreet mauris vel volutpat vestibulum. Praesent fermentum, leo eu maximus lobortis, nisl urna varius nisl, ac pulvinar nulla massa at tortor. Quisque fringilla pulvinar lectus, at ornare ex faucibus in. Aliquam condimentum massa ut erat convallis, eget posuere orci ornare.</span>
            </div>
          </div>
          <div class=" self-end -ml-6 -mb-18">
            <img class="h-[8rem] sm-max:h-[6rem] min-w-fit border-4" src="src/assets/profil.webp">
            <img class="h-[5rem] sm-max:h-[4rem] min-w-fit border-2 rounded-full border-cli-primary-header -ml-8 -mt-[3rem]" src="src/assets/meisterbetrieb.webp">
          </div>
        </div>
      </div>
    <div class="flex justify-center mt-2 hidden">
      <img src="../assets/sketch1663856974184.webp" class="w-64"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "Opening",
}
</script>

<style scoped>

.parallax-container {
  background-image: url("../assets/assorted-color-threads-in-spools-1189675-1-1980x1114.webp");

  /* Set a specific height */
  height: 20%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  background-position-y: -10rem;
}


</style>