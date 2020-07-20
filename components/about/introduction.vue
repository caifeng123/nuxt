<!--
 * @Author: cc123nice
 * @Date: 2020-07-05 21:29:57
 * @LastEditTime: 2020-07-16 15:56:36
 * @Description: my progamme description
 * @FilePath: \上线快\nuxt-\components\about\introduction.vue
--> 
<template>
  <div id="introduction">
    <Title :titleinfo="titleinfo" />
    <div>
      <div class="leftimg">
        <img src="~/static/imgs/about/introduction/1.jpg" alt />
      </div>
      <div class="rightinfo">
        <p>{{company.companyName}}</p>
        <article>{{company.companyInfo}}</article>
        <button>公司官网</button>
      </div>
    </div>
    <div class="numbers">
      <span>
        <span>公司成立于</span>
        <span class="high-light">{{company.createTime}}</span>
      </span>
      <span>
        <span>美国纳斯达克上市</span>
        <span class="high-light">{{company.companyNum}}</span>
      </span>
      <span>
        <span>全国城市设有服务机构</span>
        <span class="high-light"></span>
      </span>
      <span>
        <span>业务遍布全国</span>
        <span class="high-light">{{company.city}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";

export default {
  props: {
    company: Object
  },
  data() {
    return {
      titleinfo: {
        ch: "公司简介",
        en: "Company Profile",
        bac: "PROFILE"
      }
    };
  },
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
.leftimg {
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-bottom: 28px;
  > img {
    z-index: 2;
    position: relative;
  }
  &::after {
    content: "";
    display: block;
    width: 382px;
    height: 492px;
    position: absolute;
    left: 87px;
    top: 96px;
    background: linear-gradient(0deg, #56ccf2 0%, #2f80ed 100%);
  }
}
.rightinfo {
  display: inline-block;
  margin-left: 140px;
  width: 616px;
  > p {
    line-height: 71px;
    font-size: 24px;
    color: #4fc0e9;
  }
  > article {
    color: #656565;
    font-size: 14px;
  }
  > button {
    border: 0;
    margin-top: 96px;
    width: 180px;
    height: 64px;
    color: #ffffff;
    font-size: 24px;
    background: linear-gradient(
      90deg,
      rgba(85, 203, 241, 1) 0%,
      rgba(47, 127, 237, 1) 100%
    );
  }
}
.numbers {
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  span {
    width: 540px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ededed;
    .high-light {
      font-size: 30px;
      color: #4fc0e9;
    }
  }
}
</style>