<template>
  <div class="h-full flex flex-col">
      <div class="ml-16 mt-32 w-full flex-1 flex-shrink justify-start z-20">
        <h1 class="sm-max:text-5xl text-6xl w-full">Schneiderei & Design </h1>
        <h2 class="sm-max:text-4xl text-4xl">Gabriele Burgstaller</h2>

        <div class="h-1/2 flex justify-start items-start mt-16 pr-16">
          <div class="card bg-cli-primary-light w-[85%] max-w-5xl flex flex-wrap justify-center">
            <div class="">
              <span class="basis-2/3 flex-grow mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie facilisis elit, vitae fermentum libero egestas non. Suspendisse nec nisl gravida, commodo dolor eu, facilisis arcu. Etiam eleifend scelerisque commodo. Quisque laoreet mauris vel volutpat vestibulum. Praesent fermentum, leo eu maximus lobortis, nisl urna varius nisl, ac pulvinar nulla massa at tortor. Quisque fringilla pulvinar lectus, at ornare ex faucibus in. Aliquam condimentum massa ut erat convallis, eget posuere orci ornare.</span>
            </div>
            <div class="min-w-[5rem] -mr-16 mt-auto">
              <img class="h-[9rem] sm-max:h-[7rem] rounded-full border-4 border-cli-primary-header" src="src/assets/profil.png">
              <img class="h-[5rem] sm-max:h-[4rem] rounded-full border-4 -mt-[4rem] sm-max:ml-[5rem] sm-max:-mt-[4rem]" src="src/assets/meisterbetrieb.png">
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container">
        <div class="parallax-content">
          <img src="../assets/assorted-color-threads-in-spools-1189675-1-1980x1114.jpg" alt="Parallax Image" class="parallax-img" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Opening",
  mounted() {
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY || window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-img');

      parallaxElements.forEach(function(element) {
        const parallaxOffset = scrollY * 0.3; // Adjust the speed of parallax
        element.style.transform = `translate(-50%, calc(-50% + ${parallaxOffset}px))`;
      });
    });
  }
}
</script>

<style scoped>

.parallax {
  perspective:1px;
  perspective-origin: center center;
}

.img{
  /* The image used */
  background-image: url("../assets/assorted-color-threads-in-spools-1189675-1-1980x1114.jpg");

  width: 100%;
  height: 100%;

  /* Create the parallax scrolling effect */
  transform:translate3d(0, 106px,.3px) scale(.7);
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
.parallax-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px; /* Adjust as needed */
}

.parallax-content {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  z-index: 1;
}

.parallax-img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.01s linear;
}

</style>