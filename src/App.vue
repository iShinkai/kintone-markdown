<template>
  <div id="app">
    <div>this is kintone-markdown! {{ srcFieldCode }}</div>
    <mavon-editor
      :ishljs="true"
      :language="'ja'"
      :toolbars="markdownOption"
    ></mavon-editor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {},

  props: {
    appId: { type: Number, required: true, default: 0 },
    srcFieldCode: { type: String, required: true, default: '' },
    dstFieldCode: { type: String, required: true, default: '' },
    attachmentFieldCode: { type: String, required: true, default: '' }
  },

  data() {
    return {
      markdownOption: {
        bold: true
      }
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
