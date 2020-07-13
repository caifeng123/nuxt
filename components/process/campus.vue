<!--
 * @Author: cc123nice
 * @Date: 2020-07-09 16:33:04
 * @LastEditTime: 2020-07-13 16:26:40
 * @Description: my progamme description
 * @FilePath: \nuxt\components\process\campus.vue
--> 
<template>
  <div id="campus">
    <Title position="center" :titleinfo="titleinfo" />
    <div ref="chinachart" id="11" style="height:887px;width:100%"></div>
  </div>
</template>

<script>
import Title from "../common/title";
import { chinaMap } from "~/assets/js/common";
export default {
  data() {
    return {
      titleinfo: {
        ch: "宣讲行程",
        en: "Campus Roadshow",
        bac: "CAMPUS"
      }
    };
  },
  mounted() {
    chinaMap(this.$refs.chinachart);
  },
  components: {
    Title
  }
};
</script>

<style>
</style>