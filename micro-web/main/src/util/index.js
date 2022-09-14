import { registerMicroApps, start } from '../../micro/index'

export const registerApp = (list) => {
  // 注册到微前端框架里
  registerMicroApps(list)
  start()
}
