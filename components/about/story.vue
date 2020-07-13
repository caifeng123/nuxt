<!--
 * @Author: cc123nice
 * @Date: 2020-07-08 14:07:05
 * @LastEditTime: 2020-07-13 14:21:22
 * @Description: my progamme description
 * @FilePath: \nuxt\components\about\story.vue
--> 
<template>
  <div style="margin: 0 150px" id="story">
    <Title :titleinfo="titleinfo" position="center" />
    <div class="story container">
      <div id="story-prev" class="story-item-button prev" slot="button-prev">
        <Icon type="left" />
      </div>
      <swiper ref="story" class="swiper-no-swiping swiper" :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>
      <div id="story-next" class="story-item-button next" slot="button-next">
        <Icon type="right" />
      </div>
    </div>
    <div class="bottomline"></div>
    <div class="bottom">
      <div v-for="(item,index) in 5" :key="item.id" :class="{ 'activecolor':index === activeIndex}">
        <div class="bottom-round"></div>
        <div class="bottom-info">asdhak</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";

export default {
  data() {
    return {
      activeIndex: 0,
      swiperOption: {
        effect: "fade",
        fadeEffect: {
          crossFade: true //默认：false。关闭淡出。
        },
        pagination: {
          el: "#story-pagination",
          clickable: true
        },
        navigation: {
          nextEl: "#story-next",
          prevEl: "#story-prev"
        },
        on: {
          slideChange: () => {
            this.activeIndex = this.$refs.story.swiper.activeIndex;
          }
        }
      },
      titleinfo: {
        ch: "员工故事",
        en: "Employees Story",
        bac: "EMPLOYEES"
      }
    };
  },
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
.story {
  display: flex;
  justify-content: space-between;
  .story-item-button {
    width: 36px;
    line-height: 36px;
    align-self: center;
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
  .swiper {
    width: 1100px;
    height: 507px;
  }
}
.bottomline {
  width: 100%;
  height: 1px;
  background: #eeeeee;
}
.bottom {
  display: flex;
  justify-content: space-around;
  .bottom-round {
    width: 20px;
    height: 20px;
    background: #666666;
    border-radius: 50%;
    border: 5px solid #fff;
    margin: 0 auto 20px;
    transform: translate(0, -50%);
    box-shadow: 0px 2px 12px 0px rgba(79, 193, 233, 0.4);
  }
}
.activecolor {
  .bottom-round {
    background: #4fc1e9;
  }
  .bottom-info {
    color: #4fc1e9;
  }
}
</style>