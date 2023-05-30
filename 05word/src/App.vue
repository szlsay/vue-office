<template>
  <div>
    <div
      id="websiteEditorElem"
      style="height: 300px; background: #ffffff"
    ></div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "wangEditor",
  data() {
    return {
      phoneEditor: "",
      name: "",
      content: ""
    };
  },
  methods: {},
  mounted() {
    this.phoneEditor = new E("#websiteEditorElem");
    // 上传图片到服务器，base64形式
    this.phoneEditor.config.uploadImgShowBase64 = true;
    // // 隐藏网络图片
    this.phoneEditor.config.showLinkImg = false;

    this.phoneEditor.config.debug = true;
    //图片上传接口
    this.phoneEditor.config.uploadImgServer = ""; // 上传图片的接口地址
    this.phoneEditor.config.uploadFileName = "image"; // formdata中的name属性，比如现在是将图片image加入到formdate，后台从image中接收到图片数据
    this.phoneEditor.config.uploadImgHeaders = {
      token: sessionStorage.getItem("token"), // 设置请求头
    };
    this.phoneEditor.config.uploadImgHooks = {
      customInsert: function (insertImg, result, editor) {
        console.log("成功", insertImg, result, editor);
      },
    };
    // 创建一个富文本编辑器
    this.phoneEditor.create();
    // 修改的时候，需要富文本内容回显，则需要加入以下代码
    this.phoneEditor.txt.html(this.content);

    this.phoneEditor.config.onchange = (html) => {
      this.info_ = html; // 绑定当前逐渐地值
      this.$emit("change", this.info_); // 将内容同步到父组件中
    };
  },
};
</script>
