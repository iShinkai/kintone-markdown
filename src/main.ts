import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

new Vue({
  render: h => h(App)
}).$mount('#app')

/**
 * アプリの設定
 */
const appSettings = {
  appId: 81, // 対象のアプリID
  srcFieldCode: '本文', // Markdown テキストを入力するフィールドのフィールドコード
  dstFieldCode: '本文_リッチエディター', // レンダリングされたテキストを表示するフィールドのフィールドコード
  attachmentFieldCode: '添付ファイル', // 添付ファイルを格納するフィールドのフィールドコード
  spaceField: 'kintone-markdown' // エディタを差し込むスペース要素
}

/**
 * マウント処理
 */
const mount = (elem: HTMLElement, settings: any) => {
  const vm = new Vue({
    render: h => h(App),
    props: { ...settings }
  })
  vm.$mount(elem)

  return vm
}

/**
 * レコード作成・編集時イベント処理
 */
kintone.events.on(
  ['app.record.create.show', 'app.record.edit.show'],
  (event: typeof kintoneEvent) => {
    console.log(event)
    console.log(appSettings)

    mount(
      kintone.app.record.getSpaceElement(appSettings.spaceField),
      appSettings
    )
  }
)

kintone.events.on('app.record.index.show', (event: typeof kintoneEvent) => {
  console.log('💓')
  console.log(event)
})
