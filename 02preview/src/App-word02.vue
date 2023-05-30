<template>
  <div>
    <input type="file" @change="changeHandle" />
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
    };
  },
  methods: {
    changeHandle(event) {
      let file = event.target.files[0];
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = () => {
        this.src = fileReader.result;
      };
    },
  },
};
</script>
