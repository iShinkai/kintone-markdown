declare let kintone: {
  api: function
  events: {
    on: function
    off: function
  }
  app: {
    record: {
      set: function
      get: function
      getSpaceElement: function
      setFieldShown: function
    }
  }
  [key: string]: unknown
}

declare let kintoneEvent: {
  appId: number
  record: unknown
  recordId: number
  type: string
}

declare let kintoneRecord: {
  [key: string]: {
    type: string
    value: string | number | boolean | object | unknown
  }
}
