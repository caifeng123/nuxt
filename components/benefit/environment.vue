<!--
 * @Author: cc123nice
 * @Date: 2020-07-08 17:07:33
 * @LastEditTime: 2020-07-13 16:26:23
 * @Description: my progamme description
 * @FilePath: \nuxt\components\benefit\environment.vue
--> 
<template>
  <div style="background: #f8f8f8; position:relative" id="environment">
    <Title :titleinfo="titleinfo" />
    <div class="environment">
      <swiper ref="environment" class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="~/static/imgs/benefit/environment/1.jpg" alt />
          <div>SDASD</div>
        </swiper-slide>
        <swiper-slide>
          <img src="~/static/imgs/benefit/environment/2.jpg" alt />
          <div>SDASD</div>
        </swiper-slide>
        <swiper-slide>
          <img src="~/static/imgs/benefit/environment/3.jpg" alt />
          <div>SDASD</div>
        </swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>
      <div id="environment-prev" class="environment-item-button prev" slot="button-prev">
        <Icon type="left" />
      </div>
      <div id="environment-next" class="environment-item-button next" slot="button-next">
        <Icon type="right" />
      </div>
    </div>
    <div id="environment-pagination" class="pagination" slot="pagination"></div>
  </div>
</template>

<script>
import Title from "../common/title";
export default {
  data() {
    return {
      titleinfo: {
        ch: "工作环境",
        en: "Working Environment",
        bac: "ENVIRONMENT"
      },
      swiperOption: {
        freeMode: true,
        pagination: {
          el: "#environment-pagination",
          clickable: true,
          type: "fraction"
        },
        navigation: {
          nextEl: "#environment-next",
          prevEl: "#environment-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.environment {
  position: relative;
  .environment-item-button {
    position: absolute;
    width: 36px;
    line-height: 36px;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 9;
    outline: none;
    text-align: center;
    background: linear-gradient(
      -45deg,
      rgba(86, 204, 242, 1) 0%,
      rgba(47, 128, 237, 1) 100%
    );
  }
  .swiper-button-disabled {
    background: #ddd;
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }
  .swiper {
    width: 100%;
    .swiper-slide {
      line-height: 30px;
      width: 640px !important;
      margin: 0 20px;
    }
  }
}
.pagination {
  position: absolute;
  top: 0;
}
</style>