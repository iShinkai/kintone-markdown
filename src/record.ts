/**
 * レコードに値をセットする
 */
export const setTextValue = (
  value: string,
  field: string,
  record: typeof kintoneRecord
) => {
  record[field].value = value
  kintone.app.record.set({ record: record })
}
