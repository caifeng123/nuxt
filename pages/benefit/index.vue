<!--
 * @Author: cc123nice
 * @Date: 2020-07-08 16:22:47
 * @LastEditTime: 2020-07-13 17:05:45
 * @Description: my progamme description
 * @FilePath: \nuxt\pages\benefit\index.vue
--> 
<template>
  <div>
    <Benefit class="container" />
    <Environment />
    <Employee class="container" />
  </div>
</template>

<script>
import Benefit from "~/components/benefit/benefit";
import Environment from "~/components/benefit/environment";
import Employee from "~/components/benefit/employee";
export default {
  components: {
    Benefit,
    Environment,
    Employee
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