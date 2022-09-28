import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

let instance = null

const render = () => {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app-vue')
}

if (!window.__MICRO_WEB__) {
  render()
}

export async function bootstrap() {
  console.log('bootstrap')
}

export async function mount() {
  console.log('vue2- mount')
  window.custom.on('test3', (data) => {
    console.log('------***', data)
  })
  window.custom.emit('test2', {
    b: 888,
  })
  const storeData = window.store.getStore()
  window.store.update({
    ...storeData,
    c: 33,
  })
  render()
}

export async function unmount() {
  console.log('vue2-卸载', instance)
  /* const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  } */
}
