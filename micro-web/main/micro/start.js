import { setList, getList } from './const/subApps'
import { rewriteRouter } from './router/rewriteRouter'
import { currentApp } from './utils'

// 实现路由拦截
rewriteRouter()

export const registerMicroApps = (appList) => {
  // window.appList = appList
  console.log(appList)
  setList(appList)
}

// 启动微前端框架
export const start = () => {
  const apps = getList()

  if (!apps.length) {
    throw Error('子应用列表为空，请正确注册')
  }

  const app = currentApp()
  console.log('app', app)
  if (app) {
    const { pathname, hash } = window.location
    const url = pathname + hash
    window.history.pushState('', '', url)
    window.__CURRENT_SUB_APP__ = app.activeRule
  }
}
