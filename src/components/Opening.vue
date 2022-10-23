<template>
  <div class="h-full">
    <div class="flex flex-row flex-wrap h-full justify-around">
      <div class="blob flex justify-center w-1/3">
        <div class="img"/>
      </div>
      <div class="pt-32 flex-1 w-2/3 h-full">
        <h1 class="textvlg ml-16">Schneiderei & Design </h1>
        <h2 class="textlg ml-16">Gabriele Burgstaller</h2>
        <div class="h-3/4 flex flex-flow-wrap justify-center items-center">
          <div class="card w-[85%] max-w-5xl flex flex-wrap justify-center">
            <span class="basis-2/3 flex-grow mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie facilisis elit, vitae fermentum libero egestas non. Suspendisse nec nisl gravida, commodo dolor eu, facilisis arcu. Etiam eleifend scelerisque commodo. Quisque laoreet mauris vel volutpat vestibulum. Praesent fermentum, leo eu maximus lobortis, nisl urna varius nisl, ac pulvinar nulla massa at tortor. Quisque fringilla pulvinar lectus, at ornare ex faucibus in. Aliquam condimentum massa ut erat convallis, eget posuere orci ornare. Etiam erat magna, scelerisque sed cursus non, tempor id lacus. Nullam viverra arcu ac ipsum hendrerit, a tempus purus pellentesque. Etiam molestie lobortis neque non fermentum. Duis malesuada at mauris ut aliquet. Phasellus mattis tortor vel diam faucibus, ut vestibulum mauris scelerisque. Cras fermentum augue ac consequat pulvinar. Nulla rhoncus sit amet lorem vel feugiat. Quisque tempus, justo id volutpat vehicula, ipsum lorem sodales dolor, ut mollis sapien libero ultricies sapien.</span>
            <div class="min-w-[15rem] ml-8">
              <img class="h-[15rem] rounded-full border-8 border-indigo-200" src="src/assets/profil.png">
              <img class="h-[8rem] rounded-full border-8 border-indigo-200 mr-8rem -mt-[5rem]" src="src/assets/meisterbetrieb.png">
            </div>
          </div>
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
  background-size: 100% 100%;
}
.blob{
  -webkit-mask-image: url(../assets/blob.svg);
  mask-image: url(../assets/blob.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  min-width: 50rem;
}
.flex-flow-wrap{
  flex-flow: wrap;
}

</style>