<!--
 * @Author: cc123nice
 * @Date: 2020-07-02 14:59:12
 * @LastEditTime: 2020-07-06 11:12:41
 * @Description: my progamme description
 * @FilePath: \nuxt\pages\index.vue
--> 
<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in pictures" :key="item">
        <img :src="item" style="width:100%;height:100%" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <button class="learnmore">了解更多</button>
    <div class="copyright">Copyright © 51job. All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  layout() {
    return "index";
  },

  data() {
    return {
      pictures: [
        require("~/static/imgs/index-swiper/1.jpg"),
        require("~/static/imgs/index-swiper/2.jpg"),
        require("~/static/imgs/index-swiper/3.jpg")
      ],

      swiperOption: {
        direction: "vertical",
        autoplay:true,
        loop:true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style lang="scss">
.swiper {
  height: 100vh;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: #fff;
  }
}
.learnmore {
  position: absolute;
  left: 98px;
  top: 50%;
  width: 200px;
  height: 72px;
  background: linear-gradient(90deg, #56ccf2, #2f80ed);
  border: 0;
  z-index: 9;
  color: #fff;
  font-size: 24px;
}
.copyright {
  font-size: 14px;
  color: #fff;
  position: absolute;
  left: 98px;
  bottom: 6%;
  z-index: 9;
}
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  margin: 21px 0 !important;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
