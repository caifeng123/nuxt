<!--
 * @Author: cc123nice
 * @Date: 2020-07-09 15:38:43
 * @LastEditTime: 2020-07-13 16:41:38
 * @Description: my progamme description
 * @FilePath: \nuxt\components\process\process.vue
--> 
<template>
  <div id="process">
    <Title :titleinfo="titleinfo" position="center" />
    <div class="process container">
      <div id="process-prev" class="process-item-button prev" slot="button-prev">
        <Icon type="left" />
      </div>
      <div style="position:relative">
        <div class="bottomline"></div>
        <div class="bottom">
          <div
            v-for="(item,index) in 5"
            :key="item.id"
            :class="{ 'activecolor':index === activeIndex}"
          >
            <Icon
              type="zaixianshenqing"
              style="font-size:80px"
              :class="{ 'myfont':index === activeIndex}"
            />
            <div class="bottom-round"></div>
            <div class="bottom-info">asdhak</div>
          </div>
        </div>
        <swiper ref="process" class="swiper-no-swiping swiper" :options="swiperOption">
          <swiper-slide>
            <div class="slide-title">笔试</div>
            <div class="slide-article">
              笔试形式：在线笔试。
              笔试时间：集中在9-10月分批次进行，请留意笔试通知。
              笔试通知将通过短信和邮件的方式发放。如收到短信但未收到邮件，请注意查看垃圾邮件。
              请留意实际笔试通知中的截止时间，务必在截止时间前完成笔试，过期无效。
            </div>
          </swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
        </swiper>
      </div>

      <div id="process-next" class="process-item-button next" slot="button-next">
        <Icon type="right" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";
import Icon from "../common/icon";
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
          el: "#process-pagination",
          clickable: true
        },
        navigation: {
          nextEl: "#process-next",
          prevEl: "#process-prev"
        },
        on: {
          slideChange: () => {
            this.activeIndex = this.$refs.process.swiper.activeIndex;
          }
        }
      },
      titleinfo: {
        ch: "招聘流程",
        en: "Recruitment Process",
        bac: "PROCESS"
      }
    };
  },
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
.process {
  display: flex;
  justify-content: space-between;
  .process-item-button {
    width: 36px;
    line-height: 36px;
    align-self: flex-start;
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
    height: 200px;
    margin-top: 127px;
    box-shadow: 0px 8px 32px 0px rgba(72, 78, 88, 0.1);
    .swiper-slide {
      padding: 30px 88px;
      .slide-title {
        font-size: 18px;
        color: #4fc1e9;
        line-height: 58px;
      }
      .slide-article {
        font-size: 14px;
        color: #666;
      }
    }
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
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  .bottom-round {
    width: 20px;
    height: 20px;
    background: #666666;
    border-radius: 50%;
    border: 5px solid #fff;
    margin: 20px auto;
    transform: translate(0, -50%);
    box-shadow: 0px 2px 12px 0px rgba(79, 193, 233, 0.4);
  }
  .bottom-info {
    text-align: center;
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
.myfont {
  fill: #4fc1e9;
  transition: .6s ease;
}
</style>