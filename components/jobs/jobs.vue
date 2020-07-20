<!--
 * @Author: cc123nice
 * @Date: 2020-07-15 10:09:22
 * @LastEditTime: 2020-07-15 15:53:44
 * @Description: my progamme description
 * @FilePath: \nuxt\components\jobs\jobs.vue
--> 
<template>
  <div id="jobs">
    <Title position="center" :titleinfo="titleinfo" />
    <div class="selector">
      <Select class="select" v-model="city">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select class="select" v-model="department">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Input v-model="input" type="text" placeholder="输入职位" class="input" />
      <Button class="button">搜索</Button>
    </div>
  </div>
</template>

<script>
import Title from "../common/title";
export default {
  components: {
    Title
  },
  data() {
    return {
      titleinfo: {
        ch: "招聘职位",
        en: "Join Us",
        bac: "JOBS"
      },
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      city: "",
      department:"",
      input:""
    };
  }
};
</script>

<style lang="scss" scoped>
.selector {
  display: flex;
  justify-content: space-between;
  .select {
    margin-right: 37px;
  }
  .input {
    margin-right: 37px;
  }
  .button {
    min-width: 130px;
    border: 0;
    font-size: 20px;
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(86, 204, 242, 1) 0%,
      rgba(47, 128, 237, 1) 100%
    );
    box-shadow: 0px 4px 16px 0px rgba(79, 193, 233, 0.4);
    border-radius: 25px;
  }
}
</style>