import { isTurnChild } from '../utils'

export const turnApp = async () => {
  console.log('路由切换了-- pushState')
}

export const turnApp2 = async () => {
  console.log('路由切换了2-- replaceState')
}

export const turnApp3 = async () => {
  console.log('路由切换了3-- onpopstate')
}
