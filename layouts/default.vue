<!--
 * @Author: cc123nice
 * @Date: 2020-07-02 14:59:12
 * @LastEditTime: 2020-07-13 14:57:42
 * @Description: my progamme description
 * @FilePath: \nuxt\layouts\default.vue
--> 
<template>
  <div>
    <Head />
    <transition name="nuxt">
      <Nuxt />
    </transition>
    <Foot />
  </div>
</template>
<script>
import Head from "~/components/common/head.vue";
import Foot from "~/components/common/foot.vue";
export default {
  components: {
    Head,
    Foot
  }
};
</script>
<style>
.nuxt-enter-active,
.nuxt-leave-active {
  transition: opacity 0.5s;
}
.nuxt-enter, .nuxt-leave-to {
  opacity: 0;
}
</style>