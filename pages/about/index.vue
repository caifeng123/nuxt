<!--
 * @Author: cc123nice
 * @Date: 2020-07-05 14:18:43
 * @LastEditTime: 2020-07-13 17:05:19
 * @Description: my progamme description
 * @FilePath: \nuxt\pages\about\index.vue
--> 
<template>
  <div>
    <Introduction class="container" />
    <History class="container" />
    <Production class="container" />
    <Honor />
    <Story class="container" />
  </div>
</template>

<script>
import Introduction from "~/components/about/introduction.vue";
import History from "~/components/about/history";
import Production from "~/components/about/production";
import Honor from "~/components/about/honor";
import Story from "~/components/about/story";
export default {
  components: {
    Introduction,
    History,
    Production,
    Honor,
    Story
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