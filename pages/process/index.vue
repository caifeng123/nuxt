<!--
 * @Author: cc123nice
 * @Date: 2020-07-09 15:36:55
 * @LastEditTime: 2020-07-10 11:45:00
 * @Description: my progamme description
 * @FilePath: \nuxt\pages\process\index.vue
--> 
<template>
  <div>
    <Process class="container" />
    <Campus class="container" />
    <Qa class="container" />
  </div>
</template>

<script>
import Process from "~/components/process/process";
import Campus from "~/components/process/campus";
import Qa from "~/components/process/qa";

export default {
  components: {
    Process,
    Campus
  },
  mounted() {
    document.querySelector(this.$route.hash).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};
</script>

<style>
</style>