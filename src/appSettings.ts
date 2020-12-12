/**
 * アプリ設定
 */
export const appSettings = {
  // エディタを差し込むスペース要素
  spaceField: 'editor-space',

  // Markdown テキストを入力するフィールドのフィールドコード
  srcFieldCode: '本文',

  // エディタのツールバーオプション
  // https://github.com/hinesboy/mavonEditor/blob/master/README-EN.md#props
  toolbars: {
    bold: true,
    italic: true,
    header: true,
    underline: true,
    strikethrough: true,
    mark: true,
    superscript: true,
    subscript: true,
    quote: true,
    ol: true,
    ul: true,
    link: true,
    imagelink: true,
    code: true,
    table: true,
    fullscreen: true,
    readmodel: true,
    htmlcode: true,
    help: true,
    undo: true,
    redo: true,
    trash: false,
    save: false,
    navigation: true,
    alignleft: true,
    aligncenter: true,
    alignright: true,
    subfield: true,
    preview: true
  },

  // Markdown エディタのプレースホルダのテキスト
  placeholder: 'Markdown記法で入力してください',

  // code のスタイル
  // https://github.com/hinesboy/mavonEditor/blob/master/src/lib/core/hljs/lang.hljs.css.js
  codeStyle: 'atom-one-dark'
}
