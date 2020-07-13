<!--
 * @Author: cc123nice
 * @Date: 2020-07-05 14:22:04
 * @LastEditTime: 2020-07-06 11:10:36
 * @Description: my progamme description
 * @FilePath: \nuxt\layouts\index.vue
--> 
<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>
<script>
import Nav from "~/components/common/nav.vue";
export default {
  components: {
    Nav
  }
};
</script>
<style>
</style>