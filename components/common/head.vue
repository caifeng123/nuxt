<!--
 * @Author: cc123nice
 * @Date: 2020-07-03 11:36:27
 * @LastEditTime: 2020-07-08 16:49:36
 * @Description: my progamme description
 * @FilePath: \nuxt\components\common\head.vue
-->   
<template>
  <div class="head"  id="head">
    <Nav />
    <img src="~static/imgs/common/head/banner.jpg" ref="topbanner" style="width:100%" />
  </div>
</template>

<script>
import Nav from './nav'
export default {
  components:{
    Nav
  },
};
</script>

<style lang="scss">


</style>