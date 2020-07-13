<!--
 * @Author: cc123nice
 * @Date: 2020-07-08 16:24:12
 * @LastEditTime: 2020-07-13 16:27:19
 * @Description: my progamme description
 * @FilePath: \nuxt\components\benefit\benefit.vue
--> 
<template>
  <div id= "benefit">
    <Title :titleinfo="titleinfo" position="center"/>
    <div class="benefit">
      <div v-for="item in 6" class="benefit-item">
        <img src="~/static/imgs/benefit/benefit/earth.png" alt="">
        <div>入职缴纳五险一金</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";
export default {
  data() {
    return {
      titleinfo: {
        ch: "薪资福利",
        en: "Compensation & Benefits",
        bac: "BENEFITS"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  .benefit{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .benefit-item{
      width: 400px;
      text-align: center;
    }
  }
</style>