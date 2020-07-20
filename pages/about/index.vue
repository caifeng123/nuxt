<!--
 * @Author: cc123nice
 * @Date: 2020-07-05 14:18:43
 * @LastEditTime: 2020-07-20 12:06:50
 * @Description: my progamme description
 * @FilePath: \上线快\nuxt-\pages\about\index.vue
--> 
<template>
  <div>
    <div v-for="(item,index) in pageList" :key="item.id">
      <!-- <Introduction class="container" v-if="item==='Introduction'" :data="arr[index]" />
      <History class="container" v-else-if="item==='History'"  :data="arr[index]" />
      <Production class="container" v-else-if="item==='Production'" :data="arr[index]" />
      <Honor v-else-if="item==='Honor'" :data="arr[index]"/>
      <Story class="container" v-else-if="item==='Story'" :data="arr[index]" /> -->
      <!-- <div v-else>11</div> -->
    </div>
  </div>
</template>

<script>
const Introduction = () => import("~/components/about/introduction");
const History = () => import("~/components/about/history");
const Production = () => import("~/components/about/production");
const Honor = () => import("~/components/about/honor");
const Story = () => import("~/components/about/story");
export default {
  async asyncData({ $axios }) {
    let alldata = await $axios.get(`/getAbout`);
    let { code, pageList } = alldata.data;
    let arr = []
    for(let i = 0;i<pageList.length;i++){
      console.log(pageList[i])
      let res = await $axios.get(`/get${pageList[i]}`);
      console.log(res)
      arr[i] = res.data.data
    }
    console.log(arr)
    return {
      pageList,
      arr
    };
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