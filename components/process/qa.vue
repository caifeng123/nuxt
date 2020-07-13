<!--
 * @Author: cc123nice
 * @Date: 2020-07-10 11:43:25
 * @LastEditTime: 2020-07-10 14:40:30
 * @Description: my progamme description
 * @FilePath: \nuxt\components\process\qa.vue
--> 
<template>
  <div id="qa">
    <Title position="center" :titleinfo="titleinfo"/>
    <div class="item">
      <div class="question">
        <Icon type="qa" style="font-size:22px"/>
        <span>我可以申请多个业务领域， 不同的培训生计划或空缺吗？</span>
      </div>
      <div class="answer">
        <Icon type="qa" style="font-size:22px"/>
        <span>很遗憾不可以。我们要求考生首先了解不同业务领域及地点的具体信息，作出明智的决定。
        我们也鼓励您来我们的校园活动，通过与我行代表见面交谈来充分了解不同的培训计划以及不同的要求。
        这可以帮助你更好的和自己的技能以及兴趣相匹配。</span>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";
import Icon from "../common/icon";

export default {
  data() {
    return {
      titleinfo: {
        ch: "常见问题",
        en: "Q & A",
        bac: "Q & A"
      }
    };
  },
}
</script>

<style lang="scss" scoped>
.item{
    margin-bottom: 60px;

  .question{
    color: #4FC1E9;
    font-size: 18px;
    margin-bottom: 31px;
  }
  .answer{
    color:#666;
    font-size: 14px;
  }
}

</style>