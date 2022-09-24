import { isTurnChild } from '../utils'
import { lifecycle } from '../lifeCycle'

export const turnApp = async () => {
  if (isTurnChild()) {
    // 微前端的生命周期执行
    await lifecycle()
    console.log('路由切换了-- pushState')
  }
}

export const turnApp2 = async () => {
  if (isTurnChild()) {
    await lifecycle()
    console.log('路由切换了2-- replaceState')
  }
}

export const turnApp3 = async () => {
  console.log('路由切换了3-- onpopstate')
}
