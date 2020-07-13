<!--
 * @Author: cc123nice
 * @Date: 2020-07-04 11:59:51
 * @LastEditTime: 2020-07-07 11:45:12
 * @Description: my progamme description
 * @FilePath: \nuxt\components\common\icon.vue
--> 
<template>
    <svg class="icons">
      <use :xlink:href="'#i-'+type" />
    </svg>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'home'
    }
  }
}
</script>

<style scoped>
.icons {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor; /* fill用currentColor则会自动匹配当前的color属性值 */
  overflow: hidden;
}
</style>