<template>
  <div id="docx-demo">
    <el-upload
      :limit="1"
      :file-list="fileList"
      accept=".docx"
      :beforeUpload="beforeUpload"
      action=""
    >
      <el-button size="small" type="warning">点击上传</el-button>
    </el-upload>
    <vue-office-docx :src="src" />
  </div>
</template>

<script>
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";
export default {
  components: {
    VueOfficeDocx,
  },
  data() {
    return {
      src: "",
      fileList: [],
    };
  },
  methods: {
    beforeUpload(file) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (loadEvent) => {
        let arrayBuffer = loadEvent.target.result;
        this.src = arrayBuffer;
      };
      return false;
    },
  },
};
</script>
