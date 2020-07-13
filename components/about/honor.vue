<!--
 * @Author: cc123nice
 * @Date: 2020-07-07 14:17:38
 * @LastEditTime: 2020-07-13 14:20:58
 * @Description: my progamme description
 * @FilePath: \nuxt\components\about\honor.vue
--> 

<template>
  <div style="background:#F8F8F8" id="honor">
    <div class="honor">
      <Title :titleinfo="titleinfo" style="margin-bottom:0" />

      <img src="~/static/imgs/about/honor/2.jpg" />
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div class="leftitem">
            <img src="~/static/imgs/about/honor/1.png" alt />
            <div class="leftitem-year">2017</div>
          </div>
          <div class="rightitem">前程无忧51Job—互联网最具行业领导力—2017WMIC</div>
        </swiper-slide>

        <swiper-slide>
          <div class="leftitem">
            <img src="~/static/imgs/about/honor/1.png" alt />
            <div class="leftitem-year">2017</div>
          </div>
          <div class="rightitem">前程无忧51Job—互联网最具行业领导力—2017WMIC</div>
        </swiper-slide>
        <swiper-slide>
          <div class="leftitem">
            <img src="~/static/imgs/about/honor/1.png" alt />
            <div class="leftitem-year">2017</div>
          </div>
          <div class="rightitem">前程无忧51Job—互联网最具行业领导力—2017WMIC</div>
        </swiper-slide>
        <swiper-slide>
          <div class="leftitem">
            <img src="~/static/imgs/about/honor/1.png" alt />
            <div class="leftitem-year">2017</div>
          </div>
          <div class="rightitem">前程无忧51Job—互联网最具行业领导力—2017WMIC</div>
        </swiper-slide>
        <swiper-slide>
          <div class="leftitem">
            <img src="~/static/imgs/about/honor/1.png" alt />
            <div class="leftitem-year">2017</div>
          </div>
          <div class="rightitem">前程无忧51Job—互联网最具行业领导力—2017WMIC</div>
        </swiper-slide>
        <swiper-slide>
          <div class="leftitem">
            <img src="~/static/imgs/about/honor/1.png" alt />
            <div class="leftitem-year">2017</div>
          </div>
          <div class="rightitem">前程无忧51Job—互联网最具行业领导力—2017WMIC</div>
        </swiper-slide>
      </swiper>
      <div class="honor-item">
        <div id="honor-prev" class="honor-item-button prev" slot="button-prev">
          <Icon type="up" />
        </div>
        <div id="honor-next" class="honor-item-button next" slot="button-next">
          <Icon type="down" />
        </div>
      </div>
      <div class="honor-pagination">
        <div id="honor-pagination" class="pagination" slot="pagination"></div>
        <div class="bottomline"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 25,
        direction: "vertical",
        pagination: {
          el: "#honor-pagination",
          clickable: true,
          type: "fraction"
        },
        navigation: {
          nextEl: "#honor-next",
          prevEl: "#honor-prev"
        }
      },
      titleinfo: {
        ch: "企业荣誉",
        en: "Enterprise Honor",
        bac: "HONOR"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.honor {
  position: relative;
  img {
    width: 100%;
  }
  .swiper {
    position: absolute;
    right: 0;
    height: 635px;
    top: 30%;
    width: 406px;
    padding: 3px 3px;
    .swiper-slide {
      background: #ffffff;
      box-shadow: 0px 2px 7px -1px #485857;
      line-height: 140px;
      width: 400px;
      padding: 0 20px;
      .leftitem {
        width: 105px;
        position: relative;
        display: inline-block;
        vertical-align: top;
        img {
          width: 100%;
        }
        .leftitem-year {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #4fc1e9;
          font-size: 24px;
        }
      }
      .rightitem {
        margin-left: 19px;
        width: 232px;
        color: #666666;
        font-size: 14px;
        line-height: initial;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .honor-item {
    z-index: 9;
    width: 36px;
    text-align: center;
    height: 80px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    right: 440px;
    bottom: -70px;
    .pagination {
      display: inline-block;
      width: 108px;
      font-size: 24px;
      color: #666;
      font-weight: 700;
    }
    .honor-item-button {
      width: 36px;
      line-height: 36px;
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
  .honor-pagination {
    position: absolute;
    top: 25%;
    right: 0px;
    .bottomline {
      width: 400px;
      height: 1px;
      background: #ccc;
    }
  }
}
</style>