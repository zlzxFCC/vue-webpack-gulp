

<template>
  <!-- <div>
  <div id="container" v-for="img in imgs">
    <img v-lazyload="img" src="http://docs.gomeminus.com/vue-lazyload-img/test/images/7.jpg" style="display:block;width:100%;">
  </div>
</div> -->
<div ref="container">
    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <img v-lazy="imgUrl"/>
    <div v-lazy:background-image="imgUrl"></div>

    <!-- Customer scrollable element -->
    <!-- <img v-lazy.container ="imgUrl"/>
    <div v-lazy:background-image.container="img"></div> -->

   <img v-lazy="imgUrl" :data-srcset="imgUrl+ '?size=400 400w, ' + imgUrl + ' ?size=800 800w, ' + imgUrl +'/1200.jpg 1200w'" />
   <img v-lazy="imgUrl" :data-srcset="imgUrl+ '?size=400 400w, ' + imgUrl + ' ?size=800 800w, ' + imgUrl +'/1200.jpg 1200w'" />
</div>

</template>

<script>
export default {
  data() {
    return {
      imgObj: {
        src: 'http://xx.com/logo.png',
        error: 'http://xx.com/error.png',
        loading: 'http://xx.com/loading-spin.svg'
      },
      imgUrl: 'http://xx.com/logo.png',
      imgs: [
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/1.jpg',
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/2.jpg',
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/3.jpg',
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/4.jpg',
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/5.jpg',
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/6.jpg',
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/7.jpg',
          'http://docs.gomeminus.com/vue-lazyload-img/test/images/8.jpg'
      ]
    }
  }
}
</script>
