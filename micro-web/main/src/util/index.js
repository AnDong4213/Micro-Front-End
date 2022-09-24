import { registerMicroApps, start } from '../../micro/index'
import { loading } from '../store'

export const registerApp = async (list) => {
  // 注册到微前端框架里
  await registerMicroApps(list, {
    beforeLoad: [
      () => {
        loading.changeLoading(true)
        console.log('主应用-开始加载')
      },
    ],
    mounted: [
      () => {
        loading.changeLoading(false)
        console.log('主应用-渲染完成')
      },
    ],
    destoryed: [
      () => {
        console.log('主应用-卸载完成')
      },
    ],
  })
  await start()
}
