import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { setMain } from './utils/global'

let instance = null

function render() {
  instance = createApp(App)
  instance.use(router).mount('#app')
}

if (!window.__MICRO_WEB__) {
  render()
}
export async function bootstrap() {
  console.log('vue3- app bootstrap')
}

export async function mount() {
  //   setMain(app)
  console.log('vue3- mount')
  window.custom.emit('test', {
    a: 666,
  })
  window.custom.on('test2', (data) => {
    console.log('++++===', data)
    window.custom.emit('test3', {
      c: 999,
    })
  })
  const storeData = window.store.getStore()
  window.store.update({
    ...storeData,
    b: 22,
  })
  render()
}

export async function unmount(ctx) {
  if (ctx) {
    console.log('vue3- unmount')
    /* instance.unmount()
    instance = null

    const { container } = ctx
    if (container) {
      document.querySelector(container).innerHTML = ''
    } */
  }
}
