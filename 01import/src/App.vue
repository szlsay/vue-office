<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item
        label="用户名称"
        prop="username"
        :rules="{
          required: true,
          message: '请输入用户名称',
          trigger: 'blur',
        }"
      >
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item
        label="值"
        prop="value"
        :rules="{
          required: true,
          message: '当前项为必填项',
          trigger: 'blur',
        }"
      >
        <el-input v-model="form.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="background-color: #1094cb"
          type="primary"
          @click="onSubmit('form')"
          >导出</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import JSZipUtils from "jszip-utils";
import JSZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
export default {
  data() {
    return {
      form: {
        username: "",
        value: "",
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.exportWord();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    exportWord() {
      const _this = this;
      JSZipUtils.getBinaryContent("test.docx", function (error, content) {
        // 抛出异常
        if (error) {
          throw error;
        }
        // 创建一个JSZip实例，内容为模板的内容
        let zip = new JSZip(content);
        // 创建并加载docxtemplater实例对象
        let doc = new Docxtemplater().loadZip(zip);
        // 设置模板变量的值
        doc.setData({
          ..._this.form,
        });
        try {
          // 用模板变量的值替换所有模板变量
          doc.render();
        } catch (error) {
          this.$message.error("导出报表失败");
          throw error;
        }

        // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
        let out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        // 将目标文件对象保存为目标类型的文件，并命名
        saveAs(out, "测试.docx");
      });
    },
  },
};
</script>
