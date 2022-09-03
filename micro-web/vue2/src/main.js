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
  render()
}

export async function unmount(ctx) {
  console.log('卸载', instance)
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}
