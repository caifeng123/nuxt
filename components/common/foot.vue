<!--
 * @Author: cc123nice
 * @Date: 2020-07-03 11:25:23
 * @LastEditTime: 2020-07-15 13:47:32
 * @Description: my progamme description
 * @FilePath: \nuxt\components\common\foot.vue
--> 
<template>
  <div class="foot">
    <Title :titleinfo="titleinfo" style="margin:0;padding:0"/>
    <div class="container">
      <div class="foot-mid">
        <div class="foot-mid-left">
          <div>
            <Icon type="phone" />&nbsp;&nbsp;联系电话：400-888-8888
          </div>
          <div>
            <Icon type="mail" />&nbsp;&nbsp;邮箱：chalmers.zha@51job.com
          </div>
          <div>
            <Icon type="position" />&nbsp;&nbsp;地址：上海浦东新区张东路1387号3号楼
          </div>
          <button>公司官网</button>
        </div>
        <div class="foot-mid-right">
          <div class="right-item">
            <img src="~/static/imgs/common/foot/1.png" alt />
            <div>扫一扫关注微信公众号</div>
          </div>
          <div class="right-item">
            <img src="~/static/imgs/common/foot/1.png" alt />
            <div>扫一扫关注微信服务号</div>
          </div>
        </div>
      </div>
      <div class="foot-bottom">Copyright © 51job. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/common/icon";
import Title from './title'

export default {
  components: {
    Icon,
    Title
  },
  data() {
    return {
      titleinfo: {
        ch: "产品与服务",
        en: "Products and Services",
        bac: "PRODUCT"
      }
    };
  }
};
</script>

<style lang="scss">
.foot {
  position: relative;
  background: #f8f8f8;
  height: 550px;
  left: 0;
  right: 0;
  .foot-top {
    height: 100px;
  }
  .foot-mid {
    overflow: hidden;
    .foot-mid-left {
      float: left;
      line-height: 62px;
      font-size: 16px;
      button {
        width: 180px;
        height: 64px;
        background: linear-gradient(90deg, #56ccf2 0%, #2f80ed 100%);
        border: 0;
        font-size: 24px;
        color: #fff;
        margin-top: 30px;
      }
    }
    .foot-mid-right {
      float: right;
      padding: 15px;
      .right-item {
        float: left;
        margin-right: 55px;
        img {
          width: 180px;
        }
        div {
          margin-top: 24px;
          text-align: center;
          color: #666666;
          font-size: 16px;
        }
      }
    }
  }
  .foot-bottom {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>