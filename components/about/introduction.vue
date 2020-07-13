<!--
 * @Author: cc123nice
 * @Date: 2020-07-05 21:29:57
 * @LastEditTime: 2020-07-13 14:19:12
 * @Description: my progamme description
 * @FilePath: \nuxt\components\about\introduction.vue
--> 
<template>
  <div id ="introduction">
    <Title :titleinfo="titleinfo"/>
    <div>
      <div class="leftimg">
        <img src="~/static/imgs/about/introduction/1.jpg" alt />
      </div>
      <div class="rightinfo">
        <p>前程无忧</p>
        <article>
          “前程无忧”(Nasdaq:JOBS)是国内一个集多种媒介资源优势的专业人力资源服务机构，创始人为甄荣辉。它集合了传统媒体、网络媒体及先进的信息技术，加上一支经验丰富的专业顾问队伍，提供包括招聘猎头、培训测评和人事外包在内的全方位专业人力资源服务，现在全国25个城市设有服务机构。2004年9月，前程无忧成为第一个在美国纳斯达克上市的中国人力资源服务企业，是中国最具影响力的人力资源服务供应商之一。
          前程无忧成立于1998年，是一家网络招聘服务提供商，网站目标有两大部分：致力于为积极进取的白领阶层和专业人士提供更好的职业发展机会。同时，网站致力于为企业搜寻、招募到最优秀的人才。
          提供报纸招聘、网络招聘、招聘猎头、培训测评和人事外包在内的人力资源服务，最初全国包括香港在内的26个城市设有服务机构，至今已经增加至104个城市。
        </article>
        <button>公司官网</button>
      </div>
    </div>
    <div class="numbers">
      <span>
        <span>公司成立于</span>
        <span class="high-light">1998</span>
      </span>
      <span>
        <span>美国纳斯达克上市</span>
        <span class="high-light">2004.09</span>
      </span>
      <span>
        <span>全国城市设有服务机构</span>
        <span class="high-light">25个</span>
      </span>
      <span>
        <span>业务遍布全国</span>
        <span class="high-light">104个城市</span>
      </span>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";

export default {
  data() {
    return {
      titleinfo: {
        ch: "公司简介",
        en: "Company Profile",
        bac: "PROFILE"
      }
    };
  },
  components:{
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