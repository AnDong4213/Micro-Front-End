import React from 'react'
import ReactDOM from 'react-dom'
import BasicMap from './src/router/index.jsx'
import './index.scss'

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById('app-react'))
}

if (!window.__MICRO_WEB__) {
  render()
}

export const bootstrap = () => {
  console.log('react15-bootstrap')
}

export const mount = () => {
  window.aaa = 9999
  console.log('react15-mount')
  render()
}

export const unmount = () => {
  console.log('react15-卸载')
}
