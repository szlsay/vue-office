<template>
  <div>
    <vue-office-docx :src="docx" @rendered="rendered" />
  </div>
</template>

<script>
//引入VueOfficeDocx组件
import VueOfficeDocx from "@vue-office/docx";
//引入相关样式
import "@vue-office/docx/lib/index.css";

export default {
  components: {
    VueOfficeDocx,
  },
  data() {
    return {
      docx: "http://static.shanhuxueyuan.com/test2.docx", //设置文档网络地址，可以是相对地址
    };
  },
  methods: {
    rendered() {
      console.log("渲染完成");
    },
  },
};
</script>
