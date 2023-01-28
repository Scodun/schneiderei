<template>
  <div class="h-full">
    <div class="flex flex-row flex-wrap h-1/2 sm-max:h-80 min-h-[5rem] justify-around ">
      <div class="blob flex justify-center w-1/2 max-w-[800px] sm-max:max-h-72 sm-max:absolute sm-max:top-20 sm-max:w-full sm-max:h-full sm-max:opacity-50 sm-max:z-10">
        <div class="img"/>
      </div>
      <div class="ml-16 mt-32 w-full flex-1 flex-shrink justify-start z-20">
        <h1 class="sm-max:text-5xl text-6xl w-full">Schneiderei & Design </h1>
        <h2 class="sm-max:text-4xl text-4xl">Gabriele Burgstaller</h2>
      </div>
    </div>
    <div class="h-1/2 flex justify-center items-start mt-4">
        <div class="card bg-cli-primary-light w-[85%] max-w-5xl flex flex-wrap justify-center">
          <span class="basis-2/3 flex-grow mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie facilisis elit, vitae fermentum libero egestas non. Suspendisse nec nisl gravida, commodo dolor eu, facilisis arcu. Etiam eleifend scelerisque commodo. Quisque laoreet mauris vel volutpat vestibulum. Praesent fermentum, leo eu maximus lobortis, nisl urna varius nisl, ac pulvinar nulla massa at tortor. Quisque fringilla pulvinar lectus, at ornare ex faucibus in. Aliquam condimentum massa ut erat convallis, eget posuere orci ornare.</span>
          <div class="min-w-[15rem] ml-8">
            <img class="h-[15rem] sm-max:h-[7rem] rounded-full border-8 border-indigo-200" src="src/assets/profil.png">
            <img class="h-[8rem] sm-max:h-[4rem] rounded-full border-8 border-indigo-200 -mt-[5rem] sm-max:ml-[5rem] sm-max:-mt-[4rem]" src="src/assets/meisterbetrieb.png">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opening"
}
</script>

<style scoped>
.img{
  /* The image used */
  background-image: url("../assets/assorted-color-threads-in-spools-1189675-1-1980x1114.jpg");

  /* Set a specific height */

  width: 100%;
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: top left;
  background-repeat: no-repeat;
  /*background-size: 100% 100%;*/
}
.blob{
  -webkit-mask-image: url(../assets/blob.svg);
  mask-image: url(../assets/blob.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  min-width: 30rem;
}
.flex-flow-wrap{
  flex-flow: wrap;
}

</style>