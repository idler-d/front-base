import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from "./router"
import axios from 'axios'
import VueAxios from 'vue-axios'
import "normalize.css"

const app = createApp(App);
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(VueAxios, axios);
app.mount('#app')
