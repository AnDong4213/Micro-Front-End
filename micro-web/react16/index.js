import React from 'react'
import './index.scss'
import ReactDOM from 'react-dom'
import BasicMap from './src/router'
import { setMain } from './src/utils/main'
// import singleSpaReact from 'single-spa-react'

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById('app-react'))
}

if (!window.__MICRO_WEB__) {
  render()
}
export async function bootstrap() {
  console.log('react16-- app bootstrap')
}

export async function mount(app) {
  console.log('react16--', app)
  /* app.appInfo.header.changeHeader(false)
  app.appInfo.nav.changeNav(false) */
  setMain(app)
  render()
}

export async function unmount(ctx) {
  console.log('react16-- 卸载')
}

/* if (!window.singleSpaNavigate) {
  render()
} */

/* const lifecycle = singleSpaReact({
  React,
  ReactDOM,
  // 根组件
  rootComponent: BasicMap,
})

export const bootstrap = lifecycle.bootstrap
export const mount = lifecycle.mount
export const unmount = lifecycle.unmount */
