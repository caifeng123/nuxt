<!--
 * @Author: cc123nice
 * @Date: 2020-07-06 16:36:39
 * @LastEditTime: 2020-07-13 14:21:11
 * @Description: my progamme description
 * @FilePath: \nuxt\components\about\production.vue
--> 
<template>
  <div class="production" id="production">
    <Title position="center" :titleinfo="titleinfo" />
    <swiper class="swiper-no-swiping swiper" :options="swiperOption">
      <swiper-slide>
        <div class="production-swiper-item">
          <div class="production-item-left"></div>
          <div class="production-item-middle">
            <div class="production-item-middle-title">招聘猎头</div>
            <article class="production-item-middle-article">
              “前程无忧”招聘猎头服务在国内创立了网站+猎头+RPO+校园招聘+管理软件的全方位招聘方案。每年为数十万家企业成功招募所需人才，
              帮助企业高效准确地锁定目标，用短的时间、经济的成本找到合适的人才。同时，“前程无忧”拥有过亿的个人用户，
              每年成功为全国求职者提供适合的工作和职业发展机会。
            </article>
          </div>
          <div class="production-item-right">
            <img src="~/static/imgs/about/production/1.jpg" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    </swiper>
    <div class="production-item">
      <div id="production-prev" class="production-item-button prev" slot="button-prev">
        <Icon type="left" />
      </div>
      <div id="production-pagination" class="pagination" slot="pagination"></div>
      <div id="production-next" class="production-item-button next" slot="button-next">
        <Icon type="right" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../common/icon";
import Title from "../common/title";

export default {
  data() {
    return {
      swiperOption: {
        effect: "fade",
        fadeEffect: {
          crossFade: true //默认：false。关闭淡出。
        },
        pagination: {
          el: "#production-pagination",
          type: "fraction",
          clickable: true
        },
        navigation: {
          nextEl: "#production-next",
          prevEl: "#production-prev"
        }
      },
      titleinfo: {
        ch: "产品与服务",
        en: "Products and Services",
        bac: "PRODUCT"
      }
    };
  },
  components: {
    Icon
  }
};
</script>

<style lang="scss">
.production {
  position: relative;
  .production-item {
    z-index: 9;
    width: 200px;
    text-align: center;
    line-height: 36px;
    position: absolute;
    left: 117px;
    bottom: 0px;
    .pagination {
      display: inline-block;
      width: 108px;
      font-size: 24px;
      color: #666;
      font-weight: 700;
    }
    .production-item-button {
      width: 36px;
      height: 36px;
      outline: none;
      text-align: center;
      display: inline-block;
      background: linear-gradient(
        -45deg,
        rgba(86, 204, 242, 1) 0%,
        rgba(47, 128, 237, 1) 100%
      );
    }
    .swiper-button-disabled {
      background: #ddd;
    }
  }
  .production-swiper-item {
    display: flex;
    .production-item-left {
      width: 104px;
      height: 1px;
      background: #4fc1e9;
      margin-right: 15px;
      margin-top: 29px;
    }
    .production-item-middle {
      width: 493px;
      .production-item-middle-title {
        line-height: 62px;
        font-size: 24px;
        color: #4fc1e9;
      }
      .production-item-middle-article {
        font-size: 14px;
      }
    }
  }
}
</style>