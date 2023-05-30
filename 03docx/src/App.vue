<template>
  <div>
    <input type="file" @change="preview" ref="file" />
    <div class="my-component" ref="preview"></div>
  </div>
</template>
<script>
const docx = require("docx-preview");
window.JSZip = require("jszip");
export default {
  methods: {
    preview() {
      docx.renderAsync(this.$refs.file.files[0], this.$refs.preview); // 渲染到页面预览
    },
  },
};
</script>
<style>
.my-component {
  width: 100%;
  height: 90vh;
  border: 1px solid #000;
}
</style>
