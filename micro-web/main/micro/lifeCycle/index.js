import { findAppByRoute } from '../utils'
import { getMainLifecycle } from '../const/mainLifeCycles'
import { loadHtml } from '../loader/htmlLoader'

// 改变了路由，重新装载新的子应用
export const lifecycle = async () => {
  const prevApp = findAppByRoute(window.__ORIGIN_APP__) // 获取上一个子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__) // 获取跳转后的子应用

  // console.log(prevApp, nextApp)
  if (!nextApp) {
    return
  }

  if (prevApp && prevApp.destoryed) {
    await destoryed(prevApp)
  }
  const app = await beforeLoad(nextApp)
  await mounted(app)
}

export const beforeLoad = async (app) => {
  await runMainLifeCycle('beforeLoad')
  app && app.beforeLoad && app.beforeLoad()

  const subApp = await loadHtml(app)
  subApp && subApp.beforeLoad && subApp.beforeLoad()
  return subApp
}

export const mounted = async (app) => {
  app && app.mounted && app.mounted()

  await runMainLifeCycle('mounted')
}

// 卸载
export const destoryed = async (app) => {
  app && app.destoryed && app.destoryed()

  // 对应执行主应用的生命周期
  await runMainLifeCycle('destoryed')
}

// 执行主应用生命周期
export const runMainLifeCycle = async (type) => {
  const mainLife = getMainLifecycle()

  // 因为主应用里配置的生命周期是一个数组，所以需要执行数组中的所有内容
  await Promise.all(mainLife[type].map((item) => item()))
}
