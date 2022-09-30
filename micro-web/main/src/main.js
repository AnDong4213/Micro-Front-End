import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { registerApp } from './util/qiankun'
import { subNavList } from './store/sub'

registerApp(subNavList)

createApp(App).use(router()).mount('#micro_web_main_app')
