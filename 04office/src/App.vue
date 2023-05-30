<template>
  <div>
    <button @click="openWord()">打开 Word</button>
    <div id="word-container"></div>
  </div>
</template>

<script>
import { exportHtmlToDocx } from 'editor-to-word';

export default {
  data () {
    return {
      html: '<p>hello <span style="color: #999">world</span></p>'
    }

  },
  methods: {
    openWord() {
      exportHtmlToDocx(this.html, 'testFileName');
    }
  }
}
</script>
