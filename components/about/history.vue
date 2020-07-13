<!--
 * @Author: cc123nice
 * @Date: 2020-07-06 11:00:21
 * @LastEditTime: 2020-07-13 14:20:48
 * @Description: my progamme description
 * @FilePath: \nuxt\components\about\history.vue
--> 
<template>
  <div id="history">
    <Title :titleinfo="titleinfo" position="center"/>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in historys" :key="item.year">
        <div v-if="index&1">
          <p class="year">{{item.year}}</p>
          <div class="middle-line"></div>
          <div class="middle"></div>
          <p class="desc">{{item.event}}</p>
        </div>
        <div v-else>
          <p class="desc">{{item.event}}</p>
          <div class="middle-line"></div>
          <div class="middle"></div>
          <p class="year">{{item.year}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="history-button">
      <div class="history-button-item left-item" id="history-prev"><Icon type="preview" style="width:27px;height:8px;transform: translate(0px, -5px);"/>PREVIEM</div>
      <div class="history-button-item right-item" id="history-next">NEXT<Icon type="next" style="width:27px;height:8px;transform: translate(0px, -5px);"/></div>
    </div>
  </div>
</template>

<script>
import Icon from '../common/icon'
import Title from "../common/title";

import { historyMock } from "./mock";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        centeredSlides: true,
        grabCursor: true,
        navigation: {
          nextEl: "#history-next",
          prevEl: "#history-prev"
        }
      },
      historys: historyMock,
      titleinfo:{
        ch: "发展历程",
        en: "Development History",
        bac: "HISTORY"
      }
    };
  },
  components:{
    Icon
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
  width: 240px !important;
  margin: 0 !important;
  p {
    margin: 0;
    line-height: inherit;
    height: 60px;
  }
  .year {
    color: #666666;
    font-size: 60px;
    font-weight: 700;
    line-height: 60px;
  }
  .middle-line {
    width: 100%;
    height: 1px;
    background: 1px 1px #ccc;
  }
  .middle {
    width: 20px;
    height: 20px;
    border: 5px solid #fff;
    background: #656565;
    border-radius: 50%;
    box-shadow: 2px 2px 12px #474d58;
    transform: translate(0, -50%);
    margin: 0 auto;
  }
  &:first-child .middle-line {
    width: 50%;
    float: right;
  }
  &:last-child .middle-line {
    width: 50%;
  }
}
.swiper-slide-active {
  .year {
    color: #4fc1e9;
  }
  .middle {
    background: #4fc1e9;
  }
}
.history-button {
  width: 440px;
  height: 35px;
  margin: 50px auto 0;
  .history-button-item {
    display: inline-block;
    width: 49%;
    text-align: center;
    color: #FFFFFF;
    font-size: 18px;
    outline: none;
  }
  .left-item{
    background: #CCCCCC;
  }
  .right-item{
    background: linear-gradient(90deg,rgba(86,204,242,1) 0%,rgba(47,128,237,1) 100%);;
  }
}
</style>