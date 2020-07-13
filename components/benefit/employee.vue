<!--
 * @Author: cc123nice
 * @Date: 2020-07-09 09:58:46
 * @LastEditTime: 2020-07-13 16:26:13
 * @Description: my progamme description
 * @FilePath: \nuxt\components\benefit\employee.vue
--> 
<template>
  <div id="employee">
    <Title position="center" :titleinfo="titleinfo" />
    <div class="buttons">
      <button>活动团建</button>
      <button>培训拓展</button>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="~/static/imgs/benefit/employee/1.jpg" alt />
        <div>出发合照</div>
      </swiper-slide>
      <swiper-slide>
        <img src="~/static/imgs/benefit/employee/2.jpg" alt />
        <div>出发合照</div>
      </swiper-slide>
      <swiper-slide>
        <img src="~/static/imgs/benefit/employee/3.jpg" alt />
        <div>出发合照</div>
      </swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    <div id="employee-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
import Title from "../common/title";

export default {
  data() {
    return {
      titleinfo: {
        ch: "员工福利",
        en: "Employee Benefit",
        bac: "BENEFITS"
      },
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 60,
        pagination: {
          el: "#employee-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.buttons {
  width: 386px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 109px;
  button {
    width: 180px;
    line-height: 60px;
    font-size: 24px;
    border: 1px solid rgba(102, 102, 102, 1);
    outline: unset;
    &:first-child {
      background: linear-gradient(
        90deg,
        rgba(86, 204, 242, 1) 0%,
        rgba(47, 128, 237, 1) 100%
      );
      color: #fff;
      border: 0;
    }
  }
}
.swiper {
  .swiper-slide {
    margin-top: 0 !important;
    div {
      text-align: center;
      line-height: 80px;
    }
  }
}
#employee-pagination {
  text-align: center;
  .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 20px;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid rgba(153, 153, 153, 1);
    background: #fff !important;
  }
}
</style>