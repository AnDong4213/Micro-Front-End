import { getList } from '../const/subApps'

// 改变全局事件状态
export const patchRouter = (event, ListerName) => {
  return function () {
    // 创建一个自定义事件
    const e = new Event(ListerName)
    // 让event来代替本函数执行
    event.apply(this, arguments)
    // 通过dispatchEvent来触发自定义事件
    window.dispatchEvent(e)
  }
}

const filterApp = (key, value) => {
  // const currentApp = getList().filter((item) => (item[key] = value))
  // return currentApp && currentApp.length ? currentApp[0] : {}

  return getList().find((item) => (item[key] = value)) || {}
}

export const currentApp = () => {
  const currentUrl = window.location.pathname
  console.log('currentUrl', currentUrl)

  return filterApp('activeRule', currentUrl)
}

export const isTurnChild = () => {
  if (window.__CURRENT_SUB_APP__ === window.location.pathname) {
    return false
  }

  return true
}
