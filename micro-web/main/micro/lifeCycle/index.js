import { findAppByRoute } from '../utils'

// 改变了路由，重新装载新的子应用
export const lifecycle = () => {
  const prevApp = findAppByRoute(window.__ORIGIN_APP__) // 获取上一个子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__) // 获取跳转后的子应用

  console.log(prevApp, nextApp)
}
