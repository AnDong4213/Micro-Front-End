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

const filterApp = (key, rule) => {
  // 妈的，把赋值=，当做===
  return getList().find((item) => item[key] === rule)
}

export const currentApp = () => {
  // const currentUrl = window.location.pathname
  const currentUrl = window.location.pathname.match(/(\/\w+)/)
  // console.log('currentUrl', currentUrl[0])

  return filterApp('activeRule', currentUrl[0])
}

// 根据 路由 查找子应用
export const findAppByRoute = (router) => {
  return filterApp('activeRule', router)
}

// 根据 name 查找子应用
export const findAppByName = (name) => {
  return filterApp('name', name)
}

// 子应用是否做了切换
export const isTurnChild = () => {
  const { pathname } = window.location
  let prefix = pathname.match(/(\/\w+)/)
  if (prefix) {
    prefix = prefix[0]
  }
  if (prefix === '/index') {
    return false
  }

  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__
  if (window.__CURRENT_SUB_APP__ === prefix) {
    return false
  }

  const currentApp = window.location.pathname.match(/(\/\w+)/)
  if (!currentApp) {
    return
  }

  // 当前路由以改变，修改当前路由
  window.__CURRENT_SUB_APP__ = currentApp[0]
  // console.log(window.__ORIGIN_APP__, window.__CURRENT_SUB_APP__)

  return true
}
