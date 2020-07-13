<!--
 * @Author: cc123nice
 * @Date: 2020-07-07 16:44:21
 * @LastEditTime: 2020-07-13 14:52:35
 * @Description: my progamme description
 * @FilePath: \nuxt\components\common\title.vue
--> 
<template>
  <div :class="position==='center'?'center':position==='right'?'right':''" style="padding:100px 0">
    <div class="myback">
      {{titleinfo.bac}}
      <div class="item">
        <div class="item-top">{{titleinfo.ch}}</div>
        <div class="item-middle"></div>
        <div class="item-bottom">{{titleinfo.en}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleinfo: {
      type: Object,
      default: {
        ch: "企业荣耀",
        en: "Enterprise Hono",
        bac: "HONOR"
      }
    },
    position: String
  }
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.myback {
  color: #f4f4f4;
  font-size: 180px;
  position: relative;
  line-height: initial;
  display: inline-block;
  .item {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    .item-top {
      font-size: 36px;
      color: #333;
    }
    .item-middle {
      width: 120px;
      height: 10px;
      margin: 10px auto;
      background: linear-gradient(
        90deg,
        rgba(86, 204, 242, 1) 0%,
        rgba(47, 128, 237, 1) 100%
      );
    }
    .item-bottom {
      color: #999;
      font-size: 14px;
    }
  }
}
</style>