<template>
  <div id="app" class="editor-container">
    <mavon-editor
      class="editor-body"
      :ishljs="true"
      :language="'ja'"
      :defaultOpen="defaultOpen"
      :toolbarsFlag="isEdit"
      :subfield="isEdit"
      :toolbars="toolbars"
      :placeholder="placeholder"
      :codeStyle="codeStyle"
      v-model="editorValue"
      @change="handleChange"
    ></mavon-editor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// レコード操作ライブラリ
import { setTextValue } from './record'

export default Vue.extend({
  name: 'App',

  /**
   * プロパティ
   */
  props: {
    // 本文フィールド
    srcFieldCode: { type: String, required: true, default: '' },

    // ツールバーオプション
    toolbars: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    },

    // プレースホルダ
    placeholder: { type: String, required: true, default: '' },

    // code 部のスタイル
    codeStyle: { type: String, required: true },

    // レコードオブジェクト
    record: { type: Object, required: true },

    // 編集中フラグ
    isEdit: { type: Boolean, required: true }
  },

  /**
   * 算出プロパティ
   */
  computed: {
    // 初期表示ビュー
    defaultOpen() {
      return this.isEdit ? '' : 'preview'
    }
  },

  /**
   * データ
   */
  data() {
    return {
      // エディタに紐づく値
      editorValue: this.record[this.srcFieldCode].value
    }
  },

  /**
   * メソッド
   */
  methods: {
    /**
     * テキスト編集時処理
     */
    handleChange(value: string) {
      // 入力値をレコードに反映させる
      setTextValue(value, this.srcFieldCode, this.record)
    }
  }
})
</script>

<style lang="scss">
.editor-container {
  width: 100%;

  .editor-body {
    height: 100%;
  }
}
</style>
