<template>
  <div class="mb-16 mt-32">
    <h2 class="text-5xl header-line "><span class="text-line">Galerie</span></h2>
  </div>
  <carousel :items-to-show="3" class="select-none">
    <slide v-for="slide in images" :key="slide">
      <div class="carousel__item">
        <img :src="slide" :id="slide" @click="makeFullScreen(slide)"/>
      </div>
    </slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';

export default {
  name: "Images.vue",
  data(){
    return {
      images: [
        this.requireFile("20191216_103603.jpg"),
        this.requireFile("DSC_0625-576x1024.jpg"),
        this.requireFile("20191216_103603.jpg"),
        this.requireFile("DSC_0625-576x1024.jpg"),
        this.requireFile("20191216_103603.jpg"),
        this.requireFile("DSC_0625-576x1024.jpg"),
        this.requireFile("20191216_103603.jpg"),
        this.requireFile("DSC_0625-576x1024.jpg"),
        this.requireFile("20191216_103603.jpg"),
        this.requireFile("DSC_0625-576x1024.jpg"),
        this.requireFile("20191216_103603.jpg"),
        this.requireFile("DSC_0625-576x1024.jpg")
      ]
    }
  },
  methods:{
    requireFile(name){
      return "./showroom/"+name
    },
    makeFullScreen(slide) {
    var divObj = document.getElementById(slide);
    //Use the specification method before using prefixed versions
    if (divObj.requestFullscreen) {
      divObj.requestFullscreen();
    }
    else if (divObj.msRequestFullscreen) {
      divObj.msRequestFullscreen();
    }
    else if (divObj.mozRequestFullScreen) {
      divObj.mozRequestFullScreen();
    }
    else if (divObj.webkitRequestFullscreen) {
      divObj.webkitRequestFullscreen();
    } else {
      console.log("Fullscreen API is not supported");
    }
}
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style scoped>

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.5);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.6);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.6);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.6);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.header-line{
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

.text-line{
  background:#EEF2FF;
  padding:0 10px;
}

</style>