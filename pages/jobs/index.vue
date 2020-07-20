<!--
 * @Author: cc123nice
 * @Date: 2020-07-15 10:08:34
 * @LastEditTime: 2020-07-15 12:55:50
 * @Description: my progamme description
 * @FilePath: \nuxt\pages\jobs\index.vue
--> 
<template>
  <div>
    <Jobs class="container" />
  </div>
</template>

<script>
import Jobs from "~/components/jobs/jobs";

export default {
  components: {
    Jobs
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