<!--
 * @Author: cc123nice
 * @Date: 2020-07-05 14:24:17
 * @LastEditTime: 2020-07-15 10:09:33
 * @Description: my progamme description
 * @FilePath: \nuxt\components\common\nav.vue
--> 
<template>
  <div :class="showbac?'head-nav showbackground':'head-nav'">
    <img src="~static/imgs/common/head/logo.png" alt />
    <ul class="mynav">
      <li @click="navigate('/',$event)">首页</li>
      <li class="head-about" @click="navigate('/about',$event)" data-id="head">
        关于我们
        <ul class="select">
          <li data-id="introduction">公司简介</li>
          <li data-id="history">发展历程</li>
          <li data-id="production">产品与服务</li>
          <li data-id="honor">企业荣誉</li>
          <li data-id="story">员工故事</li>
        </ul>
      </li>
      <li class="head-benefit" @click="navigate('/benefit',$event)" data-id="head">
        薪资福利
        <ul class="select">
          <li data-id="benefit">薪资福利</li>
          <li data-id="environment">工作环境</li>
          <li data-id="employee">员工福利</li>
        </ul>
      </li>
      <li class="head-process" @click="navigate('/process',$event)" data-id="head">
        招聘流程
        <ul class="select">
          <li data-id="process">招聘流程</li>
          <li data-id="campus">宣讲行程</li>
          <li data-id="qa">常见问题</li>
        </ul>
      </li>
      <li class="head-recruit" @click="navigate('/jobs',$event)" data-id="head">
        招聘职位
        <ul class="select">
          <li data-id="jobs">招聘职位</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.showbackground);
  },
  methods: {
    navigate(path, e) {
      if (this.$route.path === path) {
        document.querySelector(`#${e.target.dataset.id}`).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        let view = "#";
        if (e.target.dataset.id) view += e.target.dataset.id;
        else view += "head";
        this.$router.push(path + view);
      }
    },
    showbackground() {
      if (
        document.documentElement.scrollTop &&
        !this.showbac &&
        document.documentElement.scrollTop > this.height
      ) {
        this.showbac = true;
      }
      if (
        document.documentElement.scrollTop &&
        this.showbac &&
        document.documentElement.scrollTop < this.height
      ) {
        this.showbac = false;
      }
    }
  },
  data() {
    return {
      showbac: false,
      height: 200
    };
  }
};
</script>

<style lang="scss">
.showbackground {
  background: #fff;
  box-shadow: 0px 0px 11px #484e58;
  .mynav {
    color: black !important;
  }
}
.head-nav {
  min-width: 1200px;
  width: 100%;
  padding: 0 102px;
  position: fixed;
  text-align: right;
  transition: 0.8s ease;
  z-index: 99;
  img {
    margin-top: 14px;
    float: left;
  }
  .mynav {
    line-height: 100px;
    color: #ffffff;
    float: right;
    li {
      padding: 0 40px;
      float: left;
      width: 160px;
      text-align: center;
      font-size: 20px;
      &:hover {
        background: linear-gradient(0deg, #56ccf2 0%, #2f80ed 100%);
      }
    }
    .head-about,
    .head-benefit,
    .head-process,
    .head-recruit {
      position: relative;
      &:hover .select {
        display: block;
      }
    }
  }
  .select {
    position: absolute;
    left: 0;
    display: none;
    width: 160px;
    background: #fff;
    li {
      line-height: 70px;
      color: #666;
      text-align: center;
      width: 100%;
      border-bottom: 1px solid #eeeeee;
      padding: 0;
      &:last-child {
        border: 0;
      }
    }
  }
}
</style>