import { isTurnChild } from '../utils'

const allLogic = () => {}

export const turnApp = async () => {
  if (isTurnChild()) {
    console.log('路由切换了-- pushState')
  }
}

export const turnApp2 = async () => {
  console.log('路由切换了2-- replaceState')
  allLogic()
}

export const turnApp3 = async () => {
  console.log('路由切换了3-- onpopstate')
  allLogic()
}
