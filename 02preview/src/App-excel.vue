<template>
  <div class="container">
    <vue-office-excel :src="excel" @rendered="rendered" />
  </div>
</template>

<script>
//引入VueOfficeExcel组件
import VueOfficeExcel from "@vue-office/excel";
//引入相关样式
import "@vue-office/excel/lib/index.css";

export default {
  components: {
    VueOfficeExcel,
  },
  data() {
    return {
      excel: "http://static.shanhuxueyuan.com/demo/excel.xlsx", //设置文档地址
    };
  },
  methods: {
    rendered() {
      console.log("渲染完成");
    },
  },
};
</script>

<style>

html, body{
  height: 100%;
}

.container{
  height: 100%;
}
</style>
