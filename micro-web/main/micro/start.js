import { setList } from './const/subApps'

export const registerMicroApps = (appList) => {
  // window.appList = appList
  console.log(appList)
  setList(appList)
}
