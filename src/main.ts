import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// mavonEditor を使用
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

/**
 * アプリの設定
 */
import { appSettings } from './appSettings'

/**
 * マウント処理
 */
const mount = (
  elem: HTMLElement,
  record: unknown,
  isEdit: boolean,
  settings: object
) => {
  const vm = new Vue({
    render: h =>
      h(App, {
        props: { record, isEdit, ...settings }
      })
  })
  vm.$mount(elem)

  return vm
}

/**
 * レコード作成・編集時イベント処理
 */
kintone.events.on(
  ['app.record.create.show', 'app.record.edit.show', 'app.record.detail.show'],
  (event: typeof kintoneEvent) => {
    // 編集中フラグ
    const isEdit = !event.type.endsWith('detail.show')

    // 要素にスタイルをつける（エディタのサイズをスペース要素のサイズいっぱいに拡げる）
    const elem = kintone.app.record.getSpaceElement(
      appSettings.spaceField
    ) as HTMLElement
    if (elem.parentElement) {
      elem.parentElement.style.display = 'flex'
      elem.parentElement.style.height = elem.parentElement.style.minHeight
    }

    // マウント
    mount(elem, event.record, isEdit, appSettings)

    // 素の入力フィールドは非表示
    kintone.app.record.setFieldShown(appSettings.srcFieldCode, false)

    return event
  }
)
