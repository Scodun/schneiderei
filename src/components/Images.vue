<template>
  <div class="mb-16 mt-32" id="images">
    <h2 class="text-5xl header-line "><span class="text-line">Galerie</span></h2>
    <div class="flex flex-row justify-center w-full mt-16">
      <div class="flex flex-wrap w-3/4 justify-evenly">
        <div @click="showImage(item.url)" v-for="item in galleryItems" class="center-cropped m-1 cursor-pointer" :class="item.orientation?'w-44 h-64':'w-96 h-64'"
           :style="'background-image: url('+item.lq+');'">
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {createApp} from "vue";
import Image from "./Image.vue";

export default {
  name: "Images.vue",
  methods:{
    showImage(img) {
      const modalElement = document.createElement('div')
      let instance = createApp(Image, {
            image: img,
            close() {
              instance.unmount();
              modalElement.remove();
            },
          }
      )
      document.body.appendChild(modalElement);
      instance.mount(modalElement)
    }
  },
  data: () => ({
    galleryItems: [
      {url: "/showroom/1.jpg", lq: "/showroom/lq/1.jpg", orientation: true},
      {url: "/showroom/2.jpg", lq: "/showroom/lq/2.jpg", orientation: true},
      {url: "/showroom/3.jpg", lq: "/showroom/lq/3.jpg", orientation: true},
      {url: "/showroom/4.jpg", lq: "/showroom/lq/4.jpg", orientation: true},
      {url: "/showroom/5.jpg", lq: "/showroom/lq/5.jpg", orientation: true},
      {url: "/showroom/6.jpg", lq: "/showroom/lq/6.jpg", orientation: true},
      {url: "/showroom/10.jpg", lq: "/showroom/lq/10.jpg", orientation: true},
      {url: "/showroom/8.jpg", lq: "/showroom/lq/8.jpg", orientation: false},
      {url: "/showroom/7.jpg", lq: "/showroom/lq/7.jpg", orientation: true},
      {url: "/showroom/9.jpg", lq: "/showroom/lq/9.jpg", orientation: false},
      {url: "/showroom/11.jpg", lq: "/showroom/lq/11.jpg", orientation: true},
    ]
  }),
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
.center-cropped {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}

/* Set the image to fill its parent and make transparent */
.center-cropped img {
  min-height: 100%;
  min-width: 100%;
  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  /* IE 5-7 */
  filter: alpha(opacity=0);
  /* modern browsers */
  opacity: 0;
}



</style>